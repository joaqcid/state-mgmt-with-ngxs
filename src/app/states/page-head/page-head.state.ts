import { State, Action, StateContext, Selector, createSelector } from '@ngxs/store';
import { SetPageHead } from '../page-head/page-head.actions';

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

  static isPage(pageTitle: string) {
    return createSelector([PageHeadState], (state: PageHeadStateModel) => {
      return state.title === pageTitle
    })
  }

  @Action(SetPageHead)
  setTitle(ctx: StateContext<PageHeadStateModel>, action: SetPageHead) {

    ctx.patchState({
      title: action.payload.title,
      description: action.payload.description
    });
  }
}
