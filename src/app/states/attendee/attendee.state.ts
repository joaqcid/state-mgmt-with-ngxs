import { Attendee } from './../../models/attendee';
import { AttendeeFirestore } from './../../services/attendee.firestore';
import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { SetFormTitle, AddAttendee, SelectAttendee, EditAttendee, DeleteAttendee, ClearSelectedAttendee } from './attendee.actions';
import { tap } from 'rxjs/operators';

export interface AttendeeStateModel {
  formTitle: string;
  attendees: Attendee[];
  selected: Attendee

}

@State<AttendeeStateModel>({
  name: 'Atendee',
  defaults: {
    formTitle: '',
    attendees: [],
    selected: null
  }
})
export class AttendeeState implements NgxsOnInit {

  constructor(
    private attendeeFS: AttendeeFirestore
  ) {

  }

  ngxsOnInit({ patchState }: StateContext<AttendeeStateModel>) {
    this.attendeeFS.collection$(ref => ref.orderBy('name')).pipe(
      tap(attendees => {
        patchState({
          attendees: attendees
        })
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

  @Action(AddAttendee)
  async addAddAttendee({ patchState }: StateContext<AttendeeStateModel>, action: AddAttendee) {
    await this.attendeeFS.upsert(action.payload)
  }

  @Action(SelectAttendee)
  selectAttendee({ patchState }: StateContext<AttendeeStateModel>, action: SelectAttendee) {
    patchState({ selected: action.payload })
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
