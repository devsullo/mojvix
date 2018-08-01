import { RouterEffects } from './router/router.effects';
import { SeanceEffects } from '../pages/seance/store/seance.effects';
import { ChatEffects } from './../sidebar/chat/store/chat.effects';

export const effects = [
  RouterEffects,
  SeanceEffects,
  ChatEffects
];
