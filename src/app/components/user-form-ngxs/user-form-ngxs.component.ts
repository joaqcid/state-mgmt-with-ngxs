import { Component, OnInit } from '@angular/core';
import { Select, Store, Actions, ofActionSuccessful } from '@ngxs/store';
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

  // @Select(UserState.user) user$: Observable<User>;
  user$: Observable<User>;
  saveUserSuccessful$: Observable<any>;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })


  constructor(
    private store: Store,
    private actions$: Actions
  ) { }

  ngOnInit() {
    this.form.disable()

    // this.user$ = this.user$.pipe(
    //   tap(user => {
    //     this.form.patchValue(user)

    //     this.form.enable()
    //   })
    // )
    this.user$ = this.store.select(UserState.user).pipe(
      tap(user => {
        this.form.patchValue(user)

        this.form.enable()
      })
    )

    this.saveUserSuccessful$ = this.actions$.pipe(
      ofActionSuccessful(SaveUser),
      tap(() => {
        this.form.reset({
          firstName: '',
          lastName: ''
        })
      })
    )

  }

  @Dispatch()
  submit = () => new SaveUser(this.form.value)

}