import { IAppState } from './IAppState';

const initialState: IAppState = {
  init: false
};

export function reducer(state = initialState, action) {
  return state;
}
