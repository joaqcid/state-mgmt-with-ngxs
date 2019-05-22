import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GrowlNotificationActions } from './growl-notification.actions';

export type GrowlNotificationStateModel = {
  message: string
  type: 'error' | '';
}

@State<GrowlNotificationStateModel>({
  name: 'growlNotification',
  defaults: {
    message: '',
    type: ''
  }
})
export class GrowlNotificationState {

  @Selector()
  static message(state: GrowlNotificationStateModel) {
    return state.message
  }

  @Selector()
  static show(state: GrowlNotificationStateModel) {
    return state.message !== ''
  }

  @Selector()
  static isError(state: GrowlNotificationStateModel) {
    return state.type === 'error'
  }

  @Action(GrowlNotificationActions.Error)
  error(ctx: StateContext<GrowlNotificationStateModel>, action: GrowlNotificationActions.Error) {
    ctx.patchState({
      message: action.payload,
      type: 'error'
    });
  }

  @Action(GrowlNotificationActions.Dismiss)
  dismiss(ctx: StateContext<GrowlNotificationStateModel>, action: GrowlNotificationActions.Dismiss) {
    ctx.patchState({
      message: '',
      type: ''
    });
  }
}
