import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './../../../app/models/user';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form-input-output',
  templateUrl: './user-form-input-output.component.html',
  styleUrls: ['./user-form-input-output.component.scss']
})
export class UserFormInputOutputComponent implements OnInit {

  @Input() user: User
  @Output() onSubmit: EventEmitter<User> = new EventEmitter<User>();

  user$: Observable<User>;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit() {
    this.form.disable()

    if (this.user)
      this.form.patchValue(this.user)

    this.form.enable()
  }

  submit() {
    this.onSubmit.emit(this.form.value)

    this.form.reset({
      firstName: '',
      lastName: ''
    })
  }

}
