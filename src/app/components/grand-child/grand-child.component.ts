import { User } from './../../models/user';
import { UserState } from './../../states/user/user.state';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { PageHeadState } from './../../../app/states/page-head/page-head.state';
import { PAGE_HEADS } from './../../../app/app-routing.module';
import { Observable } from 'rxjs';
import { RxjsService } from './../../../app/services/rxjs.service';
import { ClickService } from './../../../app/services/click.service';
import { AngularService } from './../../../app/services/angular.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {

  @Select(PageHeadState.isPage(PAGE_HEADS.RXJS_SERVICE_I.title)) rxjsServicePage$: Observable<boolean>
  @Select(PageHeadState.isPage(PAGE_HEADS.GENERIC_SERVICE_I.title)) genericServicePage$: Observable<boolean>
  @Select(PageHeadState.isPage(PAGE_HEADS.NGXS.title)) ngxsPage$: Observable<boolean>

  @Select(UserState.user) user$: Observable<User>

  constructor(
    private rxjsService: RxjsService,
    private clickService: ClickService,
    private angularService: AngularService,
  ) { }

  ngOnInit() {

  }

  get rxjsServiceUser$() {
    return this.rxjsService.user$
  }

  get clickServiceUser$() {
    return this.clickService.user$
  }

  get user() {
    return this.angularService.user
  }

}
