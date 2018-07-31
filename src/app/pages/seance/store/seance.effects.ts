import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, filter, mergeMap } from 'rxjs/operators';
import { RouterStateUrl } from '../../../store/router/router.serializer';
import { RouterNavigationAction } from '@ngrx/router-store';

import * as fromApp from '../../../store/app.reducers';
import * as seanceActions from './seance.actions';
import * as chatActions from './../../../sidebar/chat/store/chat.actions';


@Injectable()
export class SeanceEffects {
  @Effect()
  seanceRoute = this.actions$.ofType('ROUTER_NAVIGATION').pipe(
    map((action: RouterNavigationAction) => action.payload.routerState),
    filter(f => f.url.indexOf('seance') > 0),
    mergeMap((r: RouterStateUrl) => {
      return [
        new seanceActions.InitializeSeance(r.params),
        new chatActions.InitializeChat({
          'rooms': [{'name': 'General', 'newActivity': false, 'newMsgs': 0, 'slug': ''}],
          'ActiveRoomIndex': 0
        })
      ];
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}
}
