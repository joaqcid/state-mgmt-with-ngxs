import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { PageHeadState } from './states/page-head/page-head.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Login, Logout } from './states/auth/auth.actions';
import { AuthState } from './states/auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(PageHeadState.title) pageTitle$;
  @Select(PageHeadState.description) pageDescription$;
  @Select(AuthState.loggedIn) loggedIn$;
  @Select(AuthState.loggedOut) loggedOut$;
  @Select(AuthState.email) email$;

  @Dispatch()
  login = () => new Login()

  @Dispatch()
  logout = () => new Logout()
}
