import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ClickState } from 'src/app/states/click/click.state';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Click } from 'src/app/states/click/click.actions';
import { UserState } from 'src/app/states/user/user.state';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngxs',
  templateUrl: './ngxs.component.html',
  styleUrls: ['./ngxs.component.scss']
})
export class NgxsComponent implements OnInit {

  @Select(ClickState.title$) title$: Observable<string>;
  @Select(UserState.user) user$: Observable<User>;

  constructor() { }

  ngOnInit() {
  }

  @Dispatch()
  click = () => new Click()

}
