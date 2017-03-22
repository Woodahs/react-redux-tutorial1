import ReactDOM from 'react-dom';
import Examples from './components/Examples';
import store from './redux/store/config';
import React from 'react';
import {decrease, getSum, getRandomImages} from './redux/actions/index';

const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Examples value={store.getState()}
              onDecrement={() => store.dispatch(decrease())}
              onSum={(a, b) => store.dispatch(getSum(a, b))}
              onRandomImages={() => store.dispatch(getRandomImages)}
    />,
    rootEl
  );
}
render();

store.subscribe(render);
