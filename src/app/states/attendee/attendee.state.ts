import { LoadableStateModel } from '../loadable/loadable';
import { Attendee } from './../../models/attendee';
import { AttendeeFirestore } from './../../services/attendee.firestore';
import { State, Action, StateContext, Selector, NgxsOnInit, Actions, ofActionSuccessful } from '@ngxs/store';
import { SetFormTitle, SelectAttendee, DeleteAttendee, ClearSelectedAttendee, FilterAttendees, SetLoading, SetLoaded, UpsertAttendee } from './attendee.actions';
import { tap, debounceTime, switchMap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import * as _ from 'lodash'
import { GrowlNotificationActions } from '../growl-notification/growl-notification.actions';

export interface AttendeeStateModel extends LoadableStateModel {
  formTitle: string;
  attendees: Attendee[];
  selected: Attendee;
  filterBy: string;
}

@State<AttendeeStateModel>({
  name: 'atendee',
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

  @Selector() static loading(state: LoadableStateModel) { return state.loading }
  @Selector() static loaded(state: LoadableStateModel) { return state.loaded }

  constructor(
    private attendeeFS: AttendeeFirestore,
    private actions$: Actions
  ) {

  }

  ngxsOnInit({ patchState, dispatch }: StateContext<AttendeeStateModel>) {

    this.actions$.pipe(
      ofActionSuccessful(FilterAttendees),
      debounceTime(500),
      tap(() => {
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
      map(([attendeesByName, attendeesByEmail]) => {
        const deduped = _.uniqBy([...attendeesByName, ...attendeesByEmail], 'id');
        return deduped
      }),
      tap(attendees => {
        patchState({
          attendees,
          loaded: true,
          loading: false
        })
        dispatch(new SetLoaded(attendees))
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

  @Action(SetFormTitle)
  setFormTitle({ patchState }: StateContext<AttendeeStateModel>, action: SetFormTitle) {
    patchState({ formTitle: action.payload })
  }

  @Action(SetLoading)
  setLoading({ patchState }: StateContext<AttendeeStateModel>) {
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

  @Action(UpsertAttendee)
  async upsertAttendee({ }: StateContext<AttendeeStateModel>, action: UpsertAttendee) {
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
  clearSelectedAttendee({ patchState }: StateContext<AttendeeStateModel>) {
    patchState({ selected: null })
  }

  @Action(DeleteAttendee)
  async deleteAttendee({ dispatch }: StateContext<AttendeeStateModel>, action: DeleteAttendee) {
    await this.attendeeFS.delete(action.payload)
    dispatch(new GrowlNotificationActions.Success(`Attendee deleted!`))
  }

}
