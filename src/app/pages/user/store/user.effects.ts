import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import * as userActions from './user.actions';

@Injectable()
export class UserEffects {
  @Effect({ dispatch: false })
  setUser = this.actions$.ofType(userActions.SET_USER).pipe(
    map((action: userActions.SetUser) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
    })
  );

  @Effect({ dispatch: false })
  unSetUser = this.actions$.ofType(userActions.UNSET_USER).pipe(
    map((action: userActions.UnsetUser) => {
      localStorage.removeItem('user');
    })
  );

  constructor(private actions$: Actions) {}
}
