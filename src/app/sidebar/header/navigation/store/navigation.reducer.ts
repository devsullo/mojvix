import * as navigationActions from './navigation.actions';
import { Navigation, Tab } from '../navigation.model';

const initialState: Navigation = new Navigation(
  [
    new Tab('chat', 0, false, false),
    new Tab('blurbs', 0, true, false),
    new Tab('notifications', 0, false, false),
    new Tab('navigation', 0, false, false),
  ], 'blurbs', null
);

export function navigationReducer(state = initialState, action: navigationActions.navigationActions) {
  switch (action.type) {
    case navigationActions.CHANGE_NAV_TAB:
      const tabName = action.payload;
      const oldTabState = state.tabs;
      const tabObj = oldTabState.find(tab => tab.name === tabName);
      tabObj.inited = true;
      const newTabState = oldTabState.map(tab => (tab.name === tabName ? tabObj : tab));

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
    default:
      return state;
  }

}
