import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, withLatestFrom, mergeMap } from 'rxjs/operators';

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
    mergeMap(([payload, state]) => {
      let tab;
      payload.index === state.activeTab ? tab = payload.changeTabTo : tab = -1;
      return [
        new navigationActions.ChangeNavTab(tab),
        new navigationActions.LoadNavTab({ index: payload.index, load: false }),
      ];
    }),
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromStore.AppState>
  ) {}
}
