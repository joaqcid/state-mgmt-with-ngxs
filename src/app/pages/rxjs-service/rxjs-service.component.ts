import { ClickService } from './../../services/click.service';
import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-rxjs-service',
  templateUrl: './rxjs-service.component.html',
  styleUrls: ['./rxjs-service.component.scss']
})
export class RxjsServiceComponent implements OnInit {

  title$: Observable<string>;
  user$: Observable<User>;

  constructor(
    private rxjsService: RxjsService,
    private clickService: ClickService
  ) { }

  // ngOnInit() {
  //   this.title$ = this.rxjsService.title$
  //   this.user$ = this.rxjsService.user$
  // }

  // click() {
  //   this.rxjsService.click()  
  // }

  // save(user: User) {
  //   this.rxjsService.save()
  // }

  ngOnInit() {
    this.title$ = this.clickService.title$
    this.user$ = this.clickService.user$
  }

  click() {
    this.clickService.click()
  }

  save(user: User) {
    this.clickService.save(user)
  }


}
