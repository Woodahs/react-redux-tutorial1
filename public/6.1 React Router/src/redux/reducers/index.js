import counter from './counter';
import sum from './sum';
import images from './images';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
  count: counter,
  sum,
  images,
  routing: routerReducer
});
