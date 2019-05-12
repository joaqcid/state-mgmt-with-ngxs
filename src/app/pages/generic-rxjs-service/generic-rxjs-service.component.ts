import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ClickService } from 'src/app/services/click.service';

@Component({
  selector: 'app-generic-rxjs-service',
  templateUrl: './generic-rxjs-service.component.html',
  styleUrls: ['./generic-rxjs-service.component.scss']
})
export class GenericRxjsServiceComponent implements OnInit {

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

  save(user: User) {
    this.clickService.save(user)
  }
}
