import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { tap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { FilterAttendees } from 'src/app/states/attendee/attendee.actions';

@Component({
  selector: 'app-attendee-filter',
  templateUrl: './attendee-filter.component.html',
  styleUrls: ['./attendee-filter.component.scss']
})
export class AttendeeFilterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    query: new FormControl('', Validators.required)
  })

  queryValueChanges$: Observable<string>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.queryValueChanges$ = this.form.controls['query'].valueChanges.pipe(
      tap(query => {
        this.store.dispatch(new FilterAttendees(query))
      })
    )
  }

}
