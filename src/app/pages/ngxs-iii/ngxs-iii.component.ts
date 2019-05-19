import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ClickState } from 'src/app/states/click/click.state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AttendeeFormComponent } from 'src/app/components/attendee-form/attendee-form.component';

@Component({
  selector: 'app-ngxs-iii',
  templateUrl: './ngxs-iii.component.html',
  styleUrls: ['./ngxs-iii.component.scss']
})
export class NgxsIIIComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  openAttendeeForm() {
    const modalRef = this.modalService.open(AttendeeFormComponent);
  }

  ngOnInit() {
  }

}
