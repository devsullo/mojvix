import * as navigationActions from './navigation.actions';
import { Navigation, Tab } from '../navigation.model';

const initialState: Navigation = new Navigation(
  [
    new Tab('chat', 0, false, false),
    new Tab('blurbs', 0, true, true),
    new Tab('notifications', 0, false, true),
    new Tab('navigation', 0, false, true),
  ], 1, -1
);

export function navigationReducer(state = initialState, action: navigationActions.navigationActions) {
  switch (action.type) {
    case navigationActions.CHANGE_NAV_TAB:
      const tabIndex = action.payload;
      if (tabIndex === -1) {
        return state;
      }
      if (state.activeTab === 3 && tabIndex === 3) {
        return {
          ...state,
          activeTab: state.deactivatedTab,
          deactivatedTab: tabIndex
        };
      }
      return {
        ...state,
        deactivatedTab: state.activeTab,
        activeTab: tabIndex
      };

    case navigationActions.LOAD_NAV_TAB:
      const index = action.payload.index;
      if (index === -1) {
        return state;
      }
      const lTab = state.tabs[index];
      lTab.load = action.payload.load;
      const lTabs = [...state.tabs];
      lTabs[index] = lTab;
      return { ...state, tabs: lTabs };

    case navigationActions.ENABLE_NAV_TAB:
      const eTab = state.tabs[action.payload];
      eTab.enabled = true;
      const eTabs = [...state.tabs];
      eTabs[action.payload] = eTab;
      return { ...state, tabs: eTabs };

    case navigationActions.DISABLE_NAV_TAB:
      const dTab = state.tabs[action.payload.index];
      dTab.enabled = false;
      const dTabs = [...state.tabs];
      dTabs[action.payload.index] = dTab;
      return { ...state, tabs: dTabs };
    default:
      return state;
  }

}
