import * as userActions from './user.actions';

export interface State {
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

const initialState: State = null;

export function seanceReducer(
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
