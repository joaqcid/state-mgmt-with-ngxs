import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  titleBS: BehaviorSubject<string> = new BehaviorSubject("Hello world!")
  title$: Observable<string> = this.titleBS.asObservable()

  userBS: BehaviorSubject<User> = new BehaviorSubject({
    firstName: 'Joaquin',
    lastName: 'Cid'
  })
  user$: Observable<User> = this.userBS.asObservable()

  clickCount = 0

  constructor() { }

  click() {
    this.titleBS.next(`Clicked ${++this.clickCount} times`)
  }

  save(user: User) {
    this.userBS.next(user)
  }

}
