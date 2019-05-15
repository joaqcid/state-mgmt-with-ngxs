import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './../../../app/models/user';
import { ClickService } from './../../../app/services/click.service';

@Component({
  selector: 'app-generic-rxjs-service-ii',
  templateUrl: './generic-rxjs-service-ii.component.html',
  styleUrls: ['./generic-rxjs-service-ii.component.scss']
})
export class GenericRxjsServiceIIComponent implements OnInit {

  title$: Observable<string>;
  user$: Observable<User>;

  constructor(
    private clickService: ClickService
  ) { }

  ngOnInit() {
    this.title$ = this.clickService.title$
    this.user$ = this.clickService.user$
  }

  click() {
    this.clickService.click()
  }
}
