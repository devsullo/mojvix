import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';

import * as fromApp from '../../../store/app.reducers';
import * as SeanceActions from './seance.actions';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterNavigationAction } from '@ngrx/router-store';


@Injectable()
export class SeanceEffects {
  @Effect()
  seanceRoute = this.actions$.ofType('ROUTER_NAVIGATION').pipe(
    map((action: RouterNavigationAction) => action.payload.routerState),
    map((r: ActivatedRouteSnapshot) => {
      console.log(r)
      return { type: SeanceActions.INITIALIZE_SEANCE };
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}
}
