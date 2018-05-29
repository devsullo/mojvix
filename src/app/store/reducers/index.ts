// Import reducers
import { SIDEBAR_HEADER } from './sidebar-header';
import { USER } from './user';
import { INIT, INITIALSTATE } from './init';
import { CHAT } from './chat';

const rootReducer = {
  ...INIT,
  ...SIDEBAR_HEADER,
  ...USER,
  ...CHAT
};

export function reducer(state = INITIALSTATE, action) {
  console.log(action);
  return rootReducer[action.type](state, action);
}
