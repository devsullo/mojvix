import { Action } from '@ngrx/store';

export const CHANGE_NAV_TAB = 'SIDEBAR_HEADER_CHANGE_NAV_TAB';

export class ChangeNavTab implements Action {
  readonly type = CHANGE_NAV_TAB;

  constructor(public payload: string) {}
}

export type navigationActions = ChangeNavTab;
