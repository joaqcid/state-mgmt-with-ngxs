export namespace GrowlNotificationActions {
  export class Error {
    static readonly type = '[GrowlNotification] Error';
    constructor(public payload: string) { }
  }

  export class Dismiss {
    static readonly type = '[GrowlNotification] Dismiss';
    constructor() { }
  }

  export class Success {
    static readonly type = '[GrowlNotification] Success';
    constructor(public payload: string) { }
  }
}
