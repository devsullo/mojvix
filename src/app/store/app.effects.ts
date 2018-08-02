import { UserEffects } from './../pages/user/store/user.effects';
import { RouterEffects } from './router/router.effects';
import { SeanceEffects } from '../pages/seance/store/seance.effects';
import { ChatEffects } from './../sidebar/chat/store/chat.effects';
import { NavigationEffects } from '../sidebar/header/navigation/store/navigation.effects';

export const effects = [
  RouterEffects,
  SeanceEffects,
  ChatEffects,
  NavigationEffects,
  UserEffects
];
