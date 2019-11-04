import { Component } from '@angular/core';
import { Select, Selector, Action, StateContext, Store } from '@ngxs/store';
import { AuthState } from './../../../app/states/auth/auth.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Login, Logout, AuthStateChanged } from './../../../app/states/auth/auth.actions';
import { AuthMeta } from 'src/app/states/auth/auth.selectors';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Select(AuthState.loggedIn) loggedIn$;
  @Select(AuthState.loggedOut) loggedOut$;
  @Select(AuthState.email) email$;
  @Select(AuthState.loaded) authLoaded$;
  @Select(AuthState.loading) authLoading$;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    const a = this.store.selectSnapshot(AuthMeta.loaded)
    debugger
  }

  @Dispatch()
  login = () => new Login()

  @Dispatch()
  logout = () => new Logout()

}