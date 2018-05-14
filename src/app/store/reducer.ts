import { IAppState } from './IAppState';

const initialState: IAppState = {
  user: null,
  navigation: {
    tabs: [
      { name: 'chat', notifications: 0 },
      { name: 'blurbs', notifications: 0 },
      { name: 'notifications', notifications: 0 },
      { name: 'navigation', notifications: 0 }
    ],
    activeTab: 'blurbs'
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
      return Object.assign({}, state, state.navigation.activeTab = action.tab);
    default:
      return state;
  }
}
