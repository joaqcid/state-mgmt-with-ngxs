import { User } from 'src/app/models/user';

export class SaveUser {
  static readonly type = '[User] Save';
  constructor(public payload: User) { }
}
