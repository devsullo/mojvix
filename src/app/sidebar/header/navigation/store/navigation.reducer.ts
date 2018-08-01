import * as navigationActions from './navigation.actions';
import { Navigation, Tab } from '../navigation.model';

const initialState: Navigation = new Navigation(
  [
    new Tab('chat', 0, false, true),
    new Tab('blurbs', 0, true, false),
    new Tab('notifications', 0, false, false),
    new Tab('navigation', 0, false, false),
  ], 'blurbs', null
);

export function navigationReducer(state = initialState, action: navigationActions.navigationActions) {
  switch (action.type) {
    case navigationActions.CHANGE_NAV_TAB:
      const chTab = state.tabs[action.payload];
      chTab.inited = true;
      const tabName = chTab.name;
      const newTabState = state.tabs.map(tab => (tab.name === tabName ? chTab : tab));

      if (state.activeTab === 'navigation' && tabName === 'navigation') {
        return {
          ...state,
          ...{
            tabs: newTabState,
            activeTab: state.deactivatedTab,
            deactivatedTab: tabName
          }
        };
      }
      return {
        ...state,
        ...{
          tabs: newTabState,
          deactivatedTab: state.activeTab,
          activeTab: tabName
        }
      };

    case navigationActions.ENABLE_NAV_TAB:
      const eTab = state.tabs[action.payload];
      eTab.disabled = false;
      const eTabs = [...state.tabs];
      eTabs[action.payload] = eTab;
      return { ...state, tabs: eTabs };

    case navigationActions.DISABLE_NAV_TAB:
      const dTab = state.tabs[action.payload];
      dTab.disabled = true;
      const dTabs = [...state.tabs];
      dTabs[action.payload] = dTab;
      return { ...state, tabs: dTabs };
    default:
      return state;
  }

}
