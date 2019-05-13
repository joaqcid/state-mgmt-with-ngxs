import { State, Action, StateContext, Selector } from '@ngxs/store';
import { SaveUser } from './user.actions';
import { User } from 'src/app/models/user';

export class UserStateModel {
  public user: User;
}

@State<UserStateModel>({
  name: 'user',
  defaults: {
    user: {
      firstName: 'Joaquin',
      lastName: 'Cid'
    }
  }
})
export class UserState {

  @Selector()
  static user(state: UserStateModel) {
    return state.user
  }

  @Action(SaveUser)
  saveUser({ patchState }: StateContext<UserStateModel>, action: SaveUser) {
    const { firstName, lastName } = action.payload
    patchState({
      user: {
        firstName,
        lastName
      }
    })
  }
}
