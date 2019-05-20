import 'firebase/app'

export class Login {
  static readonly type = '[Auth] Login';
  constructor() { }
}

export class AddAttendee {
  static readonly type = '[AddAttendee] AddAttendee';
  constructor() { }
}

export class CloseModal {
  static readonly type = '[AddAttendee] CloseModal';
  constructor() { }
}

export class OpenModal {
  static readonly type = '[Atendee] OpenModal';
  constructor() { }
}

export class DismissModal {
  static readonly type = '[Atendee] DismissModal';
  constructor() { }
}
