import * as navigationActions from './navigation.actions';


export interface State {
  tabs: {
    name: string;
    notifications: number;
    inited: boolean;
    disabled: boolean;
  }[];
  activeTab: string;
  deactivatedTab: string;
}

const initialState: State = {
  tabs: [
    { name: 'chat', notifications: 0, inited: false, disabled: true },
    { name: 'blurbs', notifications: 0, inited: true, disabled: false },
    { name: 'notifications', notifications: 0, inited: false, disabled: false },
    { name: 'navigation', notifications: 0, inited: false, disabled: false }
  ],
  activeTab: 'blurbs',
  deactivatedTab: null
};

export function navigationReducer(state = initialState, action: navigationActions.navigationActions) {
  switch (action.type) {
    case navigationActions.CHANGE_NAV_TAB:
      const tabName = action.payload;
      const tabObj = state.tabs.find(tab => tab.name === tabName);
      tabObj.inited = true;
      const newTabState = state.tabs.map(
        tab => (tab.name === tabName ? tabObj : tab)
      );

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
