import { Action } from '@ngrx/store';
import { Seance } from '../seance.model';

export const INITIALIZE_SEANCE = 'INITIALIZE_SEANCE';
export const DESTROY_SEANCE = 'DESTROY_SEANCE';

export class InitializeSeance implements Action {
  readonly type = INITIALIZE_SEANCE;

  constructor(public payload: Seance) { }
}

export class DestroySeance implements Action {
  readonly type = DESTROY_SEANCE;
}

export type seanceActions = InitializeSeance | DestroySeance;
