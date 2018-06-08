import { IAppState } from '../IAppState';
import { INIT_SEANCE, DEST_SEANCE } from '../../pages/seance/seance.service';

const SEANCE = {};

SEANCE[INIT_SEANCE] = function (state: IAppState, action) {
  return { ...state, ...(state.seance = action.data) };
};

SEANCE[DEST_SEANCE] = function(state: IAppState, action) {
  return { ...state, ...(state.seance = action.data) };
};

export { SEANCE };
