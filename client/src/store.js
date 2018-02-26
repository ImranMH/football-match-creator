import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const middleware = applyMiddleware(ReduxThunk, logger)
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  middleware,
  // other store enhancers if any
));

export default store;