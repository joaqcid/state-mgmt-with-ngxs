import { AuthState } from './../../states/auth/auth.state';
import { AttendeeState } from './../../states/attendee/attendee.state';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttendeeFormComponent } from '../attendee-form/attendee-form.component';
import { DeleteAttendee, SetFormTitle } from './../../../app/states/attendee/attendee.actions';

@Component({
  selector: 'app-attendee-detail',
  templateUrl: './attendee-detail.component.html',
  styleUrls: ['./attendee-detail.component.scss']
})
export class AttendeeDetailComponent implements OnInit {

  @Select(AttendeeState.selected) attendee$
  @Select(AuthState.loggedOut) loggedOut$

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  @Dispatch()
  edit = () => {
    const modalRef = this.modalService.open(AttendeeFormComponent)

    return new SetFormTitle("Edit Attendee")
  }

  @Dispatch()
  delete = (id) => new DeleteAttendee(id)

}
