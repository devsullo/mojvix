import { Action } from '@ngrx/store';

export const SET_USER = 'SET_USER';
export const UNSET_USER = 'UNSET_USER';

export class SetUser implements Action {
  readonly type = SET_USER;

  constructor(
    public payload: {
      id: number;
      email?: string;
      status: string;
      vixname: string;
      info: {
        age: string;
        sex: string;
      };
      exp: number;
      iat: number;
      avatar?: string;
    }
  ) { }
}

export class UnsetUser implements Action {
  readonly type = UNSET_USER;
}

export type userActions = SetUser | UnsetUser;
