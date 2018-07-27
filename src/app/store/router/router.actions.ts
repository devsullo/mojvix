import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export const GO = '[Router] Go';
export const BACK = '[Router] Back';
export const FORWARD = '[Router] Forward';

export interface IGoPayload {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export class Go implements Action {
  readonly type = GO;

  constructor(
    public payload: IGoPayload
  ) {}
}

export class Back implements Action {
  readonly type = BACK;
}

export class Forward implements Action {
  readonly type = FORWARD;
}

export type RouterActions = Go | Back | Forward;
