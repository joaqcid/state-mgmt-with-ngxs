import { AttendeeState } from './../../states/attendee/attendee.state';
import { Attendee } from 'src/app/models/attendee';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SelectAttendee } from 'src/app/states/attendee/attendee.actions';

@Component({
  selector: 'app-attendee-list',
  templateUrl: './attendee-list.component.html',
  styleUrls: ['./attendee-list.component.scss']
})
export class AttendeeListComponent implements OnInit {

  @Select(AttendeeState.attendees) attendees$

  constructor() { }

  ngOnInit() {
  }

  @Dispatch()
  detail = (attendee: Attendee) => new SelectAttendee(attendee)

}
