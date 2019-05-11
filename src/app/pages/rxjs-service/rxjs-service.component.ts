import { ClickService } from './../../services/click.service';
import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-service',
  templateUrl: './rxjs-service.component.html',
  styleUrls: ['./rxjs-service.component.scss']
})
export class RxjsServiceComponent implements OnInit {

  title$: Observable<string>;

  constructor(
    private rxjsService: RxjsService,
    private clickService: ClickService
  ) { }

  ngOnInit() {
    // this.title$ = this.rxjsService.title$

    this.title$ = this.clickService.title$
  }

  click() {
    // this.rxjsService.click()

    this.clickService.click()
  }


}
