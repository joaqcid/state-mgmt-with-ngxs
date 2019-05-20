import { AttendeeState } from './../../states/attendee/attendee.state';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { DismissModal } from 'src/app/states/attendee/attendee.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attendee-form',
  templateUrl: './attendee-form.component.html',
  styleUrls: ['./attendee-form.component.scss']
})
export class AttendeeFormComponent implements OnInit {

  @Select(AttendeeState.action) action$;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.activeModal.dismiss()
  }

}
