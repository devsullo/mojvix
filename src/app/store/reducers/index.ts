// Import reducers
import { SIDEBAR_HEADER } from './sidebar-header';
import { INIT, INITIALSTATE } from './init';

const rootReducer = {
  ...INIT,
  ...SIDEBAR_HEADER
};

export function reducer(state = INITIALSTATE, action) {
  console.log(action);
  return rootReducer[action.type](state, action);
}
