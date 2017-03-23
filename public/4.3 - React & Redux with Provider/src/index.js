import {render} from 'react-dom';
import Examples from './components/Examples';
import store from './redux/store/config';
import React from 'react';
import {Provider} from 'react-redux';
const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <Examples/>
  </Provider>,
  rootEl
);

// store.subscribe(render);
