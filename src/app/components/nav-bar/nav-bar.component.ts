import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { AuthState } from './../../../app/states/auth/auth.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Login, Logout } from './../../../app/states/auth/auth.actions';

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

  @Dispatch()
  login = () => new Login()

  @Dispatch()
  logout = () => new Logout()

}
