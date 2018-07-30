import { User } from '../user.model';
import * as userActions from './user.actions';

const initialState: User = null;

export function userReducer(
  state = initialState,
  action: userActions.userActions
) {
  switch (action.type) {
    case userActions.SET_USER:
      return {
        ...state,
        ...action.payload
      };
    case userActions.UNSET_USER:
      return null;
    default:
      return state;
  }
}
