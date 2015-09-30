import React from 'react';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './components/App.react';
import Recognition from './utils/Recognition';
import routes from './routes';

const history = createBrowserHistory();

React.render(
  (
    <Router history={history} routes={routes} />
  ),
  document.getElementById('react')
);
