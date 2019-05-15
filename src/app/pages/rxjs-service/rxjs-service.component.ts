import { Component, OnInit } from '@angular/core';
import { RxjsService } from './../../../app/services/rxjs.service';
import { Observable } from 'rxjs';
import { User } from './../../../app/models/user';

@Component({
  selector: 'app-rxjs-service',
  templateUrl: './rxjs-service.component.html',
  styleUrls: ['./rxjs-service.component.scss']
})
export class RxjsServiceComponent implements OnInit {

  title$: Observable<string>;
  user$: Observable<User>;

  constructor(
    private rxjsService: RxjsService
  ) { }

  ngOnInit() {
    this.title$ = this.rxjsService.title$
    this.user$ = this.rxjsService.user$
  }

  click() {
    this.rxjsService.click()
  }
}
