import counter from './examples01/counter';
import sum from './examples01/sum';
import images from './examples01/images';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  examples: combineReducers({
    count: counter,
    sum,
    images,
  }),
  todos: combineReducers({}),
  youtube: combineReducers({}),
  routing: routerReducer
});
