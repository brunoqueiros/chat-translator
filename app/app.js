import React from 'react';
import App from './components/App.react';
import Recognition from './utils/Recognition';
import { Router, Route, Link } from 'react-router';
import routes from './routes';

React.render(
  (
    <Router routes={routes}> />
  ),
  document.getElementById('react')
);
