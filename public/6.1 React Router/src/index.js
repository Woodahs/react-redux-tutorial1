import {render} from 'react-dom';
import Examples from './components/Examples';
import Examples02 from './components/Examples02';
import App from './components/App';
import store from './redux/store/config';
import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

const rootEl = document.getElementById('root');
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Examples}/>
        <Route path="ex02" component={Examples02}/>
        <Route path="ex02/:name" component={Examples02}/>
      </Route>
    </Router>
  </Provider>,
  rootEl
);

