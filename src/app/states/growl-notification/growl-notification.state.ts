import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GrowlNotificationActions } from './growl-notification.actions';

export type GrowlNotificationStateModel = {
  message: string
  type: 'error' | 'success' | '';
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

  @Selector()
  static isSuccess(state: GrowlNotificationStateModel) {
    return state.type === 'success'
  }

  @Action(GrowlNotificationActions.Error)
  error(ctx: StateContext<GrowlNotificationStateModel>, action: GrowlNotificationActions.Error) {
    ctx.patchState({
      message: action.payload,
      type: 'error'
    });
  }

  @Action(GrowlNotificationActions.Success)
  success(ctx: StateContext<GrowlNotificationStateModel>, action: GrowlNotificationActions.Success) {
    ctx.patchState({
      message: action.payload,
      type: 'success'
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
