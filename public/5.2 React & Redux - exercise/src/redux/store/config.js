import {createStore, applyMiddleware, compose} from 'redux';
import combineReducers from '../reducers/index';
import {crashReporter} from '../middlewares/index';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger'

const logger = createLogger();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combineReducers, {}, composeEnhancers(
  applyMiddleware(logger, crashReporter, thunk)
));

export default store;
