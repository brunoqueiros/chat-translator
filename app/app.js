import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Recognition from './utils/Recognition';
import routes from './routes';

const history = createBrowserHistory();

Recognition.init();

ReactDOM.render(
  (
    <Router history={history} routes={routes} />
  ),
  document.getElementById('react')
);
