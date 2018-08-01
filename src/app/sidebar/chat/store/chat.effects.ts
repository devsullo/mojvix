import { Navigation } from './../../header/navigation/navigation.model';
import { Store } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import * as fromApp from '../../../store/app.reducers';
import * as chatActions from '../store/chat.actions';
import * as navigationActions from '../../header/navigation/store/navigation.actions';

@Injectable()
export class ChatEffects {
  @Effect()
  chatInit = this.actions$.ofType(chatActions.INITIALIZE_CHAT).pipe(
    map((action: chatActions.InitializeChat) => {
      return new navigationActions.EnableNavTab(0);
    })
  );

  @Effect()
  chatDest = this.actions$.ofType(chatActions.DESTROY_CHAT).pipe(
    map((action: chatActions.DestroyChat) => {
      return new navigationActions.DisableNavTab({ index: 0, changeTabTo: 1 });
    })
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromApp.AppState>
  ) {}
}
