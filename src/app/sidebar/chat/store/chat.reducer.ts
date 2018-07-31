import * as chatActions from './chat.actions';
import { Chat } from '../chat.model';

const initialState: Chat = null;

export function chatReducer(
  state = initialState,
  action: chatActions.chatActions
) {
  switch (action.type) {
    case chatActions.INITIALIZE_CHAT:
      return {
        ...state,
        ...action.payload
      };
    case chatActions.DESTROY_CHAT:
      return null;
    default:
      return state;
  }
}
