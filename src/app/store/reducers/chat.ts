import { IAppState } from '../IAppState';
import { CREATE_ROOM } from '../../sidebar/chat/chat.service';

const CHAT = {};

CHAT[CREATE_ROOM] = function(state: IAppState, action) {
  return { ...state, ...(state.chat.rooms = action.slug) };
};

export { CHAT };
