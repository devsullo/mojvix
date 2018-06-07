// Import reducers
import { SIDEBAR_HEADER } from './sidebar-header';
import { USER } from './user';
import { INITIALSTATE } from './init';
import { CHAT } from './chat';
import { SEANCE } from './seance';

const rootReducer = {
  ...SIDEBAR_HEADER,
  ...USER,
  ...CHAT,
  ...SEANCE
};

export function reducer(state = INITIALSTATE, action) {
  console.log(action);
  if (!rootReducer[action.type]) {
    return state;
  }
  return rootReducer[action.type](state, action);
}
