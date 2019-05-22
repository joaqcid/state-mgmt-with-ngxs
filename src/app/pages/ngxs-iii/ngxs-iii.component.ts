import { SetFormTitle, ClearSelectedAttendee, FilterAttendees } from './../../states/attendee/attendee.actions';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttendeeFormComponent } from './../../../app/components/attendee-form/attendee-form.component';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-ngxs-iii',
  templateUrl: './ngxs-iii.component.html',
  styleUrls: ['./ngxs-iii.component.scss']
})
export class NgxsIIIComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private store: Store
  ) { }

  ngOnInit() {
    this.store.dispatch(new FilterAttendees(''))
  }

  @Dispatch()
  openModal = () => {
    const modalRef = this.modalService.open(AttendeeFormComponent, { backdrop: 'static' })
    return [new SetFormTitle("Add Attendee"), new ClearSelectedAttendee()]
  }

}
