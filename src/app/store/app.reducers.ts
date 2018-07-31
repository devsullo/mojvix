import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './router/router.serializer';
import { Navigation } from '../sidebar/header/navigation/navigation.model';
import { User } from '../pages/user/user.model';
import { Seance } from '../pages/seance/seance.model';
import { Chat } from '../sidebar/chat/chat.model';

import * as fromNavigation from '../sidebar/header/navigation/store/navigation.reducer';
import * as fromSeance from '../pages/seance/store/seance.reducer';
import * as fromUser from '../pages/user/store/user.reducer';
import * as fromChat from '../sidebar/chat/store/chat.reducer';


export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  user: User;
  navigation: Navigation;
  seance: Seance;
  chat: Chat;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  user: fromUser.userReducer,
  navigation: fromNavigation.navigationReducer,
  seance: fromSeance.seanceReducer,
  chat: fromChat.chatReducer
};
