import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';

import * as fromApp from '../../../store/app.reducers';
import * as SeanceActions from './seance.actions';
import { RouterStateUrl } from '../../../store/router/router.serializer';
import { RouterNavigationAction } from '@ngrx/router-store';


@Injectable()
export class SeanceEffects {
  @Effect()
  seanceRoute = this.actions$.ofType('ROUTER_NAVIGATION').pipe(
    map((action: RouterNavigationAction) => action.payload.routerState),
    filter(f => f.url.indexOf('seance') > 0),
    map((r: RouterStateUrl) => {
      return new SeanceActions.InitializeSeance(r.params);
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}
}
