import { INavigation } from './interfaces/navigation';
import { IUser } from './interfaces/user';

export interface IAppState {
  user: IUser;
  navigation: INavigation;
}
