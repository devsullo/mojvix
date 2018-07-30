import { Action } from '@ngrx/store';
import { User } from '../user.model';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export class SetUser implements Action {
  readonly type = SET_USER;

  constructor(
    public payload: User
  ) { }
}

export class UnsetUser implements Action {
  readonly type = UNSET_USER;
}

export type userActions = SetUser | UnsetUser;
