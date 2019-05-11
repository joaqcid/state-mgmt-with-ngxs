import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  titleBS: BehaviorSubject<string> = new BehaviorSubject("Hello world!")
  title$: Observable<string> = this.titleBS.asObservable()

  clickCount = 0

  constructor() { }

  click() {
    this.titleBS.next(`Clicked ${++this.clickCount} times`)
  }

}
