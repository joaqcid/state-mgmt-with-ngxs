import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SaveUser } from 'src/app/states/user/user.actions';
import { UserState } from 'src/app/states/user/user.state';

@Component({
  selector: 'app-user-form-ngxs',
  templateUrl: './user-form-ngxs.component.html',
  styleUrls: ['./user-form-ngxs.component.scss']
})
export class UserFormNgxsComponent implements OnInit {

  @Select(UserState.user) user$: Observable<User>;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit() {
    this.form.disable()

    this.user$.pipe(
      tap(user => {
        this.form.patchValue(user)

        this.form.enable()
      })
    )

  }

  @Dispatch()
  submit = () => new SaveUser(this.form.value)

  // this.form.reset({
  //   firstName: '',
  //   lastName: ''
  // })

}
