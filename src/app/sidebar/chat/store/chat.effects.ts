import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import * as chatActions from '../store/chat.actions';
import * as navigationActions from '../../header/navigation/store/navigation.actions';

@Injectable()
export class ChatEffects {


  constructor(private actions$: Actions) {}
}
