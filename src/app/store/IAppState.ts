import { INavigation } from './model/navigation';
import { IUser } from './model/user';

export interface IAppState {
  user: IUser;
  navigation: INavigation;
}
