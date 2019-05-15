import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../../app/models/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClickService } from './../../../app/services/click.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-form-generic-rxjs-service',
  templateUrl: './user-form-generic-rxjs-service.component.html',
  styleUrls: ['./user-form-generic-rxjs-service.component.scss']
})
export class UserFormGenericRxjsServiceComponent implements OnInit {

  user$: Observable<User>;

  form: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  constructor(
    private clickService: ClickService
  ) { }

  ngOnInit() {
    this.form.disable()

    this.user$ = this.clickService.user$.pipe(
      tap(user => {
        this.form.patchValue(user)

        this.form.enable()
      })
    )

  }

  submit() {
    this.clickService.save(this.form.value)
    this.form.reset({
      firstName: '',
      lastName: ''
    })
  }
}
