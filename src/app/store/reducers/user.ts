import { IAppState } from '../IAppState';
import { SET_USER } from '../../shared/services/auth.service';

const USER = {};

USER[SET_USER] = function (state: IAppState, action) {
  return { ...state, ...state.user = action.user };
};

export { USER };
