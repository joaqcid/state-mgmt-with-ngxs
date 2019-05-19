import 'firebase/app'

export class Login {
  static readonly type = '[Auth] Login';
  constructor() { }
}

export class SignInWithPopupGoogleProvider {
  static readonly type = '[Auth] SignInWithPopupGoogleProvider';
  constructor() { }
}

export class Logout {
  static readonly type = '[Auth] Logout';
  constructor() { }
}

export class AuthStateChanged {
  static readonly type = '[Auth] AuthStateChanged';
  constructor(public payload: firebase.User) { }
}
