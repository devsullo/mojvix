import { IAppState } from './../../store/IAppState';
import { NgRedux } from 'ng2-redux';
import { Injectable } from '@angular/core';
export const CREATE_ROOM = 'CHAT_CREATE_ROOM';

@Injectable()
export class ChatService {
  constructor(private ngRedux: NgRedux<IAppState>) {}

  createRoom(slug: string) {
    const action = { type: CREATE_ROOM, slug };
    this.ngRedux.dispatch(action);
  }
}
