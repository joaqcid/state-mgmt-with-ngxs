import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './../../../app/models/user';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  titleBS: BehaviorSubject<string> = new BehaviorSubject("Hello world!")
  title$: Observable<string> = this.titleBS.asObservable()
  clickCount = 0

  userBS: BehaviorSubject<User> = new BehaviorSubject({
    firstName: 'Joaquin',
    lastName: 'Cid'
  })
  user$: Observable<User> = this.userBS.asObservable()

  constructor() { }

  ngOnInit() {
    this.title$ = this.title$
  }

  click() {
    this.titleBS.next(`Clicked ${++this.clickCount} times`)
  }

  save(user: User) {
    this.userBS.next(user)
  }

}
