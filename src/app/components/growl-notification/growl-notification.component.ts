import { GrowlNotificationState } from './../../states/growl-notification/growl-notification.state';
import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { GrowlNotificationActions } from './../../../app/states/growl-notification/growl-notification.actions';

@Component({
  selector: 'app-growl-notification',
  templateUrl: './growl-notification.component.html',
  styleUrls: ['./growl-notification.component.scss']
})
export class GrowlNotificationComponent implements OnInit {

  @Select(GrowlNotificationState.message) message$
  @Select(GrowlNotificationState.show) show$
  @Select(GrowlNotificationState.isError) isError$

  constructor() { }

  ngOnInit() {
  }

  @Dispatch()
  dismiss = () => new GrowlNotificationActions.Dismiss()

}
