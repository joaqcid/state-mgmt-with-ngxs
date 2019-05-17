import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../../app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RxjsService } from './../../../app/services/rxjs.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-form-rxjs-service',
  templateUrl: './user-form-rxjs-service.component.html',
  styleUrls: ['./user-form-rxjs-service.component.scss']
})
export class UserFormRxjsServiceComponent implements OnInit {

  user$: Observable<User>;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  constructor(
    private rxjsService: RxjsService,
  ) { }

  ngOnInit() {
    this.form.disable()

    this.user$ = this.rxjsService.user$.pipe(
      tap(user => {
        this.form.patchValue(user)

        this.form.enable()
      })
    )

  }

  submit() {
    this.rxjsService.save(this.form.value)

    this.form.reset({
      firstName: '',
      lastName: ''
    })
  }

}
