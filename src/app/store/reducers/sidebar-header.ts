import { IAppState } from '../IAppState';
import { CHANGE_NAV_TAB } from '../../sidebar/header/header.service';

const SIDEBAR_HEADER = {};

SIDEBAR_HEADER[CHANGE_NAV_TAB] = function(state: IAppState, action) {
  return { ...state, ...state.navigation.activeTab = action.tab };
};


export { SIDEBAR_HEADER };
