import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(logger)
    // other store enhancers if any
  )
);

if (module.hot) {
  module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers').default));
}

export default store;
