import { IAppState } from '../IAppState';
import { CHANGE_NAV_TAB } from '../../sidebar/header/header.service';

const SIDEBAR_HEADER = {};

SIDEBAR_HEADER[CHANGE_NAV_TAB] = function(state: IAppState, action) {

  if (state.navigation.activeTab === 'navigation' && action.tab === 'navigation') {
    return {
      ...state,
      ...(
        state.navigation.activeTab = state.navigation.deactivatedTab,
        state.navigation.deactivatedTab = action.tab
      )
    };
  }
  return {
    ...state,
    ...(
      state.navigation.deactivatedTab = state.navigation.activeTab,
      state.navigation.activeTab = action.tab
    )
  };
};

export { SIDEBAR_HEADER };
