import { ActionReducerMap } from '@ngrx/store';

import * as fromNavigation from '../sidebar/header/navigation/store/navigation.reducer';
import * as fromSeance from '../pages/seance/store/seance.reducer';
import * as fromUser from '../pages/user/store/user.reducer';

export interface AppState {
  user: fromUser.State;
  navigation: fromNavigation.State;
  seance: fromSeance.State;
}

export const reducers: ActionReducerMap<AppState> = {
  user: fromUser.seanceReducer,
  navigation: fromNavigation.navigationReducer,
  seance: fromSeance.seanceReducer
};
