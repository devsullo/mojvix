import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, withLatestFrom, flatMap } from 'rxjs/operators';

import * as navigationActions from './navigation.actions';
import * as fromStore from '../../../../store/app.reducers';

@Injectable()
export class NavigationEffects {
  @Effect()
  changeTab = this.actions$.ofType(navigationActions.CHANGE_NAV_TAB).pipe(
    map((action: navigationActions.ChangeNavTab) => {
      return action.payload;
    }),
    withLatestFrom(this.store.select('navigation')),
    map(([payload, state]) => {
      const i = payload;
      return new navigationActions.LoadNavTab({ index: i, load: true });
    })
  );

  @Effect()
  disableTab = this.actions$.ofType(navigationActions.DISABLE_NAV_TAB).pipe(
    map((action: navigationActions.DisableNavTab) => {
      return action.payload;
    }),
    withLatestFrom(this.store.select('navigation')),
    map(([payload, state]) => {
      if (payload.index === state.activeTab) {
        return new navigationActions.ChangeNavTab(payload.changeTabTo);
      } else {
        return new navigationActions.ChangeNavTab(state.activeTab);
      }
    }),
    map(() => {
      return new navigationActions.LoadNavTab({ index: 0, load: false });
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromStore.AppState>
  ) {}
}
