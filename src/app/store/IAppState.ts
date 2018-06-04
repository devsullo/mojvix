import { INavigation } from './model/navigation';
import { IUser } from './model/user';
import { IChat } from './model/chat';
import { ISeance } from './model/seance';

export interface IAppState {
  user: IUser;
  navigation: INavigation;
  chat: IChat;
  seance: ISeance;
}
