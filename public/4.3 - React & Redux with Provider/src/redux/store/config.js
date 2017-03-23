import {createStore, applyMiddleware, compose} from 'redux';
import combineReducer from '../reducers/index';
import {logger, crashReporter, thunk} from '../middlewares/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducer, {}, composeEnhancers(
  applyMiddleware(logger, crashReporter, thunk)
));

export default store;
