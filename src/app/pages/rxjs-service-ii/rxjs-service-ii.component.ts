import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';
import { ClickService } from 'src/app/services/click.service';

@Component({
  selector: 'app-rxjs-service-ii',
  templateUrl: './rxjs-service-ii.component.html',
  styleUrls: ['./rxjs-service-ii.component.scss']
})
export class RxjsServiceIIComponent implements OnInit {

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
