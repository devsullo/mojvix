import { Action } from '@ngrx/store';
import { Chat, Room } from '../chat.model';

export const INITIALIZE_CHAT = 'INITIALIZE_CHAT';
export const DESTROY_CHAT = 'DESTROY_CHAT';
export const ADD_ROOM = 'ADD_ROOM';

export class InitializeChat implements Action {
  readonly type = INITIALIZE_CHAT;

  constructor(public payload: Chat) {}
}

export class DestroyChat implements Action {
  readonly type = DESTROY_CHAT;

  constructor() { }
}

export class AddRoom implements Action {
  readonly type = ADD_ROOM;

  constructor(public payload: Room) {}
}

export type chatActions = InitializeChat | DestroyChat | AddRoom;
