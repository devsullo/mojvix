import { createStore, applyMiddleware, compose } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IAppState';

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(),
  // other store enhancers if any
);

export const store = createStore(reducer, enhancer);
