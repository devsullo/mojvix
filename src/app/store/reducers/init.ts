import { IAppState } from '../IAppState';

const INITIALSTATE: IAppState = {
  user: getUser(),
  navigation: {
    tabs: [
      { name: 'chat', notifications: 0, inited: false, disabled: true },
      { name: 'blurbs', notifications: 0, inited: true, disabled: false },
      { name: 'notifications', notifications: 0, inited: false, disabled: false },
      { name: 'navigation', notifications: 0, inited: false, disabled: false }
    ],
    activeTab: 'blurbs',
    deactivatedTab: null
  },
  // TODO remove this
  chat: {
    rooms: []
  },
  seance: null
};

function getUser() {
  const user = JSON.parse(localStorage.getItem('user')) || null;
  return user;
}

export { INITIALSTATE };
