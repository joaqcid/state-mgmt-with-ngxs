import { Component, OnInit } from '@angular/core';
import { Select, Store, Actions, ofActionSuccessful } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from './../../../app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { SaveUser } from './../../../app/states/user/user.actions';
import { UserState } from './../../../app/states/user/user.state';

@Component({
  selector: 'app-user-form-ngxs',
  templateUrl: './user-form-ngxs.component.html',
  styleUrls: ['./user-form-ngxs.component.scss']
})
export class UserFormNgxsComponent implements OnInit {

  user$: Observable<User>;
  submitSuccessful$: Observable<any>;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  constructor(private store: Store, private actions$: Actions) { }

  ngOnInit() {
    this.form.disable()

    this.user$ = this.store.select(UserState.user).pipe(
      tap(user => {
        this.form.patchValue(user)
        this.form.enable()
      })
    )

    this.submitSuccessful$ = this.actions$.pipe(
      ofActionSuccessful(SaveUser),
      tap(() => { this.form.reset({ firstName: '', lastName: '' }) })
    )
  }

  @Dispatch()
  submit = () => new SaveUser(this.form.value)
}
