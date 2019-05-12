import { PageHeadStateModel } from './page-head.state';

export class SetPageHead {
  static readonly type = '[PageHead] Set Title';  
  constructor(public payload: PageHeadStateModel) { }
}
