import { Attendee } from './../../models/attendee';
import { AttendeeFirestore } from './../../services/attendee.firestore';
import { State, Action, StateContext, Selector, NgxsOnInit, Actions, ofActionSuccessful } from '@ngxs/store';
import { SetFormTitle, AddAttendee, SelectAttendee, EditAttendee, DeleteAttendee, ClearSelectedAttendee, FilterAttendees, SetLoading, SetLoaded } from './attendee.actions';
import { tap, debounceTime, switchMap } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import * as _ from 'lodash'

export interface AttendeeStateModel {
  formTitle: string;
  attendees: Attendee[];
  selected: Attendee;
  filterBy: string;
  loading: boolean
  loaded: boolean
}

@State<AttendeeStateModel>({
  name: 'Atendee',
  defaults: {
    formTitle: '',
    attendees: [],
    selected: null,
    filterBy: '',
    loading: true,
    loaded: false
  }
})
export class AttendeeState implements NgxsOnInit {

  constructor(
    private attendeeFS: AttendeeFirestore,
    private actions$: Actions
  ) {

  }

  ngxsOnInit({ patchState, dispatch }: StateContext<AttendeeStateModel>) {

    this.actions$.pipe(
      ofActionSuccessful(FilterAttendees),
      debounceTime(500),
      tap(filter => {
        dispatch(new SetLoading())
      }),
      switchMap(filter => {
        const { payload } = filter

        return combineLatest(
          this.attendeeFS.collection$(
            ref => ref.orderBy('name').startAt(payload).endAt(`${payload}\uf8ff`)
          ),
          this.attendeeFS.collection$(
            ref => ref.orderBy('email').startAt(payload).endAt(`${payload}\uf8ff`)
          )
        )

      }),
      tap(([attendeesByName, attendeesByEmail]) => {
        const deduped = _.uniqBy([...attendeesByName, ...attendeesByEmail], 'id')
        patchState({
          attendees: deduped,
          loaded: true,
          loading: false
        })
        dispatch(new SetLoaded(deduped))
      })
    ).subscribe()

  }

  @Selector()
  static formTitle(state: AttendeeStateModel) {
    return state.formTitle
  };

  @Selector()
  static attendees(state: AttendeeStateModel) {
    return state.attendees
  };

  @Selector()
  static selected(state: AttendeeStateModel) {
    return state.selected
  };

  @Selector()
  static loading(state: AttendeeStateModel) {
    return state.loading
  };

  @Action(SetFormTitle)
  setFormTitle({ patchState }: StateContext<AttendeeStateModel>, action: SetFormTitle) {
    patchState({ formTitle: action.payload })
  }

  @Action(SetLoading)
  setLoading({ patchState }: StateContext<AttendeeStateModel>, action: SetLoading) {
    patchState({
      attendees: [],
      loaded: false,
      loading: true
    })
  }

  @Action(SetLoaded)
  setLoaded({ patchState }: StateContext<AttendeeStateModel>, action: SetLoaded<Attendee[]>) {
    patchState({
      attendees: action.payload,
      loaded: true,
      loading: false
    })
  }

  @Action(AddAttendee)
  async addAttendee({ patchState }: StateContext<AttendeeStateModel>, action: AddAttendee) {
    await this.attendeeFS.upsert(action.payload)
  }

  @Action(SelectAttendee)
  selectAttendee({ patchState }: StateContext<AttendeeStateModel>, action: SelectAttendee) {
    patchState({ selected: action.payload })
  }

  @Action(FilterAttendees)
  filterAttendees({ patchState }: StateContext<AttendeeStateModel>, action: FilterAttendees) {
    patchState({ filterBy: action.payload })
  }

  @Action(ClearSelectedAttendee)
  clearSelectedAttendee({ patchState }: StateContext<AttendeeStateModel>, action: ClearSelectedAttendee) {
    patchState({ selected: null })
  }

  @Action(EditAttendee)
  async editAttendee({ patchState }: StateContext<AttendeeStateModel>, action: EditAttendee) {
    await this.attendeeFS.upsert(action.payload)
  }

  @Action(DeleteAttendee)
  async deleteAttendee({ patchState }: StateContext<AttendeeStateModel>, action: DeleteAttendee) {
    await this.attendeeFS.delete(action.payload)
  }

}
