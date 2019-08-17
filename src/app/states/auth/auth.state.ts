import { LoadableStateModel } from '../loadable/loadable';
import { State, Action, StateContext, Selector, NgxsOnInit } from '@ngxs/store';
import { Login, Logout, AuthStateChanged } from './auth.actions';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { tap } from 'rxjs/operators';

export class AuthMeta {
  // meta selectors outside @State classes
  // first param is the @State, in this case, is empty, and the AuthState.loaded selector, will be passed in second param
  @Selector([AuthState.loaded]) static loaded(state: any, loaded: boolean) { debugger; return loaded }

  @Action(AuthStateChanged) aaa(state: StateContext<any>, payload) {
    debugger
  }
}

export interface AuthStateModel extends LoadableStateModel {
  loggedIn: boolean;
  email: string;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loggedIn: false,
    email: '',
    loading: true,
    loaded: false
  }
})
export class AuthState implements NgxsOnInit {

  @Selector() static loading(state: LoadableStateModel) { return state.loading }
  @Selector() static loaded(state: LoadableStateModel) { return state.loaded }

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
    if (!action.payload)
      patchState({ loggedIn: false, email: '' })
    else
      patchState({ loggedIn: !!action.payload, email: action.payload.email || '' })

    patchState({ loaded: true, loading: false })
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
