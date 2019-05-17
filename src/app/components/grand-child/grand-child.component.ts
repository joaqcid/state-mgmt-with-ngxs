import { PAGE_HEADS } from './../../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';
import { GenericRxjsService } from 'src/app/services/generic-rxjs.service';
import { ClickService } from 'src/app/services/click.service';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PageHeadState } from 'src/app/states/page-head/page-head.state';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit {

  @Select(PageHeadState.isPage(PAGE_HEADS.RXJS_SERVICE_I.title)) rxjsServicePage$: Observable<boolean>
  @Select(PageHeadState.isPage(PAGE_HEADS.GENERIC_SERVICE_I.title)) genericServicePage$: Observable<boolean>

  constructor(
    private rxjsService: RxjsService,
    private clickService: ClickService,
  ) { }

  ngOnInit() {
  }

  get rxjsServiceUser$() {
    return this.rxjsService.user$
  }

  get clickServiceUser$() {
    return this.clickService.user$
  }

}
