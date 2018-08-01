import { Action } from '@ngrx/store';

export const CHANGE_NAV_TAB = 'CHANGE_NAV_TAB';
export const ENABLE_NAV_TAB = 'ENABLE_NAV_TAB';
export const DISABLE_NAV_TAB = 'DISABLE_NAV_TAB';

export class ChangeNavTab implements Action {
  readonly type = CHANGE_NAV_TAB;

  constructor(public payload: number) {}
}

export class EnableNavTab implements Action {
  readonly type = ENABLE_NAV_TAB;

  constructor(public payload: number) { }
}

export class DisableNavTab implements Action {
  readonly type = DISABLE_NAV_TAB;

  constructor(public payload: number) { }
}

export type navigationActions = ChangeNavTab | EnableNavTab | DisableNavTab;
