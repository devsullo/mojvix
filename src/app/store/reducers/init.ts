import { IAppState } from '../IAppState';
import { getDefaultService } from 'selenium-webdriver/edge';

const INITIALSTATE: IAppState = {
  user: getUser(),
  navigation: {
    tabs: [
      { name: 'chat', notifications: 0 },
      { name: 'blurbs', notifications: 0 },
      { name: 'notifications', notifications: 0 },
      { name: 'navigation', notifications: 0 }
    ],
    activeTab: 'blurbs'
  },
  // TODO remove this
  chat: {
    rooms: []
  },
  seance: {
    id: null,
    slug: null
  }
};

const INIT = {
  '@@INIT': function (state, action) {
    return state;
  },
};

function getUser() {
  const user = JSON.parse(localStorage.getItem('user')) || null;
  return user;
}

export { INIT, INITIALSTATE };
