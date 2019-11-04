import { Selector, Action, StateContext } from '@ngxs/store';
import { AuthStateChanged } from './auth.actions';
import { AuthState } from './auth.state';

export class AuthMeta {
    // meta selectors outside @State classes
    // first param is the @State, in this case, is empty, and the AuthState.loaded selector, will be passed in second param
    @Selector([AuthState.loaded]) static loaded(state: any, loaded: boolean) { debugger; return loaded }

    @Action(AuthStateChanged) aaa(state: StateContext<any>, payload) {
        debugger
    }
}