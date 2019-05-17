import { Component, OnInit } from '@angular/core';

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
    console.log("GrandChildComponent", "user")
    return this.angularService.user
  }

}
