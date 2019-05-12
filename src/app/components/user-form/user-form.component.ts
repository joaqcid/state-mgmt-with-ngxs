import { User } from './../../models/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() user: User
  @Output() onSubmit: EventEmitter<User> = new EventEmitter<User>();

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
