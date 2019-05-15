import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../environments/environment';

export abstract class GenericRxjsService<T> {

  protected bs: BehaviorSubject<T>;
  protected state$: Observable<T>;
  state: T;
  previous: T;

  protected abstract store: string;

  constructor(initialValue: Partial<T>) {
    this.bs = new BehaviorSubject<T>(initialValue as T);
    this.state$ = this.bs.asObservable();

    this.state = initialValue as T;
    this.state$.subscribe(s => {
      this.state = s
    })
  }

  protected patch(newValue: Partial<T>, event: string = "Not specified") {
    this.previous = this.state
    const newState = Object.assign({}, this.state, newValue);
    if (!environment.production) {
      console.groupCollapsed(`[${this.store} store] [patch] [event: ${event}]`)
      console.log("change", newValue)
      console.log("prev", this.previous)
      console.log("next", newState)
      console.groupEnd()
    }
    this.bs.next(newState)
  }

  protected set(newValue: Partial<T>, event: string = "Not specified") {
    this.previous = this.state
    const newState = Object.assign({}, newValue) as T;
    if (!environment.production) {
      console.groupCollapsed(`[${this.store} store] [set] [event: ${event}]`)
      console.log("change", newValue)
      console.log("prev", this.previous)
      console.log("next", newState)
      console.groupEnd()
    }
    this.bs.next(newState)
  }

}
