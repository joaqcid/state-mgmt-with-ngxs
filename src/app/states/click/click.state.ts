import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Click } from './click.actions';

export type ClickStateModel = {
  title: string;
  clickCount: number;
}

@State<ClickStateModel>({
  name: 'click',
  defaults: {
    title: '',
    clickCount: 0
  }
})
export class ClickState {

  @Selector()
  static title$(state: ClickStateModel) {
    return state.title
  };

  @Action(Click)
  click({ getState, setState }: StateContext<ClickStateModel>, action: Click) {
    const { clickCount, title } = getState();

    const newClickCount = clickCount + 1

    setState({
      clickCount: newClickCount,
      title: `Clicked ${newClickCount} times`
    })
  }

}
