import * as seanceActions from './seance.actions';

export interface State {
  id: number;
  slug: string;
}

const initialState: State = null;

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
