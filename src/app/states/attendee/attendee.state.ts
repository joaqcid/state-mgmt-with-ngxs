import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { OpenModal, DismissModal, AddAttendee } from './attendee.actions';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

export interface AttendeeStateModel {
  action: string;
}

@State<AttendeeStateModel>({
  name: 'Atendee',
  defaults: {
    action: ''
  }
})
export class AttendeeState implements NgxsOnInit {

  constructor(
  ) {

  }

  ngxsOnInit({ dispatch }: StateContext<AttendeeStateModel>) {

  }

  @Selector()
  static action(state: AttendeeStateModel) {
    return state.action
  };

  @Action(AddAttendee)
  openModal({ }: StateContext<AttendeeStateModel>, action: AddAttendee) {
  }  

}
