import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { Login, Logout, SignInWithPopupGoogleProvider, AuthStateChanged } from './auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { tap } from 'rxjs/operators';

export interface AuthStateModel {
  loggedIn: boolean;
  email: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loggedIn: false,
    email: ''
  }
})
export class AuthState implements NgxsOnInit {

  constructor(
    private afAuth: AngularFireAuth
  ) {

  }

  ngxsOnInit({ dispatch }: StateContext<AuthStateModel>) {
    this.afAuth.authState.pipe(
      tap(user => {
        dispatch(new AuthStateChanged(user))
      })
    ).subscribe()
  }

  @Selector()
  static loggedIn(state: AuthStateModel) {
    return state.loggedIn
  };

  @Selector()
  static loggedOut(state: AuthStateModel) {
    return !state.loggedIn
  };

  @Selector()
  static email(state: AuthStateModel) {
    return state.email
  };

  @Action(AuthStateChanged)
  async authStateChanged({ patchState }: StateContext<AuthStateModel>, action: AuthStateChanged) {
    patchState({
      loggedIn: !action.payload.isAnonymous,
      email: action.payload.email || ''
    })
  }

  @Action(Login)
  async login({ patchState }: StateContext<AuthStateModel>, action: Login) {
    const userCredential = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
    patchState({
      loggedIn: true,
      email: userCredential.user.email
    })
  }

  @Action(Logout)
  async logout({ patchState }: StateContext<AuthStateModel>, action: Logout) {
    await this.afAuth.auth.signOut()
    patchState({
      loggedIn: false,
      email: ''
    })
  }

}
