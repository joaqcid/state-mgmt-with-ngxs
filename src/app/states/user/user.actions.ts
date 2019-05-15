import { User } from './../../../app/models/user';

export class SaveUser {
  static readonly type = '[User] Save';
  constructor(public payload: User) { }
}
