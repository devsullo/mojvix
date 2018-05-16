import { IAppState } from '../IAppState';

const INITIALSTATE: IAppState = {
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

const INIT = {
  '@@INIT': function (state, action) {
    return state;
  },
};

export { INIT, INITIALSTATE };
