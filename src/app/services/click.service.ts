import { Injectable } from '@angular/core';
import { GenericRxjsService } from './generic-rxjs.service';
import { map } from 'rxjs/operators'

export type ClickModel = {
  title: string;
  clickCount: number;
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

  constructor() {
    super({
      title: "Hello world!",
      clickCount: 0
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
}
