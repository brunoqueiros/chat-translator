import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './components/App.react';

const routes = (
  <Route path="/" component={App}>
    <Route path="about" component={App}/>
  </Route>
);

export default routes;
