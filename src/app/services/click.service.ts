import { Injectable } from '@angular/core';
import { GenericRxjsService } from './generic-rxjs.service';
import { map } from 'rxjs/operators'
import { User } from '../models/user';

export type ClickModel = {
  title: string;
  clickCount: number;
  user: User
}

@Injectable({
  providedIn: 'root'
})
export class ClickService extends GenericRxjsService<ClickModel> {

  protected store: string = "click-service";

  get title$() {
    return this.state$.pipe(
      map(state => state.title)
    )
  }

  get user$() {
    return this.state$.pipe(
      map(state => state.user)
    )
  }

  constructor() {
    super({
      title: "Hello world!",
      clickCount: 0,
      user: { firstName: 'Joaquin', lastName: 'Cid' }
    })
  }

  click() {
    const { clickCount, title } = this.state
    const newClickCount = clickCount + 1
    this.patch({
      clickCount: newClickCount,
      title: `Clicked ${newClickCount} times`
    }, "click")
  }

  save({ firstName, lastName }: User) {
    this.patch(
      { user: { firstName, lastName } }
      , "save"
    )
  }
}
