import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SetPageHead } from './page-head.actions';

export type PageHeadStateModel = {
  title: string
  description: string;
}

@State<PageHeadStateModel>({
  name: 'pageHead',
  defaults: {
    title: '',
    description: ''
  }
})
export class PageHeadState {

  @Selector()
  static title(state: PageHeadStateModel) {
    return state.title
  }

  @Selector()
  static description(state: PageHeadStateModel) {
    return state.description
  }

  @Action(SetPageHead)
  setTitle(ctx: StateContext<PageHeadStateModel>, action: SetPageHead) {

    ctx.patchState({
      title: action.payload.title,
      description: action.payload.description
    });

  }
}
