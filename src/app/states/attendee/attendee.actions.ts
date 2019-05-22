import { Attendee } from './../../../app/models/attendee';

export class SetFormTitle {
  static readonly type = '[Attendee] SetFormTitle';
  constructor(public payload: string) { }
}

export class SetLoading {
  static readonly type = '[Attendee] SetLoading';
  constructor() { }
}

export class SetLoaded<T>{
  static readonly type = '[Attendee] SetLoaded';
  constructor(public payload: T) { }
}

export class AddAttendee {
  static readonly type = '[Attendee] AddAttendee';
  constructor(public payload: Attendee) { }
}

export class UpsertAttendee {
  static readonly type = '[Attendee] UpsertAttendee';
  constructor(public payload: Attendee) { }
}

export class FilterAttendees {
  static readonly type = '[Attendee] FilterAttendees';
  constructor(public payload: string) { }
}

export class SelectAttendee {
  static readonly type = '[Attendee] SelectAttendee';
  constructor(public payload: Attendee) { }
}

export class ClearSelectedAttendee {
  static readonly type = '[Attendee] ClearSelectedAttendee';
  constructor() { }
}

export class EditAttendee {
  static readonly type = '[Attendee] EditAttendee';
  constructor(public payload: Attendee) { }
}

export class DeleteAttendee {
  static readonly type = '[Attendee] DeleteAttendee';
  constructor(public payload: string) { }
}

