import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RxjsService } from 'src/app/services/rxjs.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-rxjs-service-ii',
  templateUrl: './rxjs-service-ii.component.html',
  styleUrls: ['./rxjs-service-ii.component.scss']
})
export class RxjsServiceIIComponent implements OnInit {

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

  save(user: User) {
    this.rxjsService.save(user)
  }

}
