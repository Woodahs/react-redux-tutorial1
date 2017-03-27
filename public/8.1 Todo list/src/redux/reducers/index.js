import counter from './examples01/counter';
import sum from './examples01/sum';
import images from './examples01/images';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import todoList from './todos/todoList';
import todoFilter from './todos/todoFilter';

export default combineReducers({
  examples: combineReducers({
    count: counter,
    sum,
    images,
  }),
  todos: combineReducers({
    todoList,
    todoFilter
  }),
  youtube: combineReducers({}),
  routing: routerReducer
});
