import { UpsertAttendee } from './../../states/attendee/attendee.actions';
import { Attendee } from './../../../app/models/attendee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AttendeeState } from './../../states/attendee/attendee.state';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { AddAttendee } from './../../../app/states/attendee/attendee.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-attendee-form',
  templateUrl: './attendee-form.component.html',
  styleUrls: ['./attendee-form.component.scss']
})
export class AttendeeFormComponent implements OnInit {

  @Select(AttendeeState.formTitle) formTitle$;

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    bio: new FormControl('')
  })
  edit$: Observable<any>;

  constructor(
    private activeModal: NgbActiveModal,
    private store: Store
  ) { }

  ngOnInit() {
    this.form.disable()
    this.edit$ = this.store.selectOnce(AttendeeState.selected).pipe(
      tap(attendee => {
        if (attendee)
          this.form.patchValue(attendee)
        this.form.enable()
      })
    )
  }

  dismiss() {
    this.activeModal.dismiss()
  }

  get disabled() {
    return this.form.disabled || this.form.invalid
  }

  @Dispatch()
  save = () => {
    this.activeModal.dismiss()
    return new UpsertAttendee(this.form.value)
  }
}
