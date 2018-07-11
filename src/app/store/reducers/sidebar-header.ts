import { IAppState } from '../IAppState';
import { CHANGE_NAV_TAB } from '../../sidebar/header/header.service';

const SIDEBAR_HEADER = {};

SIDEBAR_HEADER[CHANGE_NAV_TAB] = function(state: IAppState, action) {
  const tabName = action.tab;
  const tabObj = state.navigation.tabs.find(tab => tab.name === tabName);
  tabObj.inited = true;
  const newTabState = state.navigation.tabs.map(
    tab => (tab.name === tabName ? tabObj : tab)
  );

  if (state.navigation.activeTab === 'navigation' && tabName === 'navigation') {
    return {
      ...state,
      ...(
        state.navigation.tabs = newTabState,
        state.navigation.activeTab = state.navigation.deactivatedTab,
        state.navigation.deactivatedTab = tabName
      )
    };
  }
  return {
    ...state,
    ...(
      state.navigation.tabs = newTabState,
      state.navigation.deactivatedTab = state.navigation.activeTab,
      state.navigation.activeTab = tabName
    )
  };
};

export { SIDEBAR_HEADER };
