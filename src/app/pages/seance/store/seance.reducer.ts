import * as seanceActions from './seance.actions';
import { Seance } from '../seance.model';

const initialState: Seance = null;

export function seanceReducer(state = initialState, action: seanceActions.seanceActions) {
  switch (action.type) {
    case seanceActions.INITIALIZE_SEANCE:
      return {
        ...state,
        ...action.payload
      };
    case seanceActions.DESTROY_SEANCE:
      return null;
    default:
      return state;
  }
}
