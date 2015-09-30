import React from 'react';
import { Router, Route, Link } from 'react-router';
// import App from './components/App.react';
import Video from './components/VideoSection.react';
import Message from './components/MessageSection.react';

const routes = (
  <Route path="/" component={Video}>
    <Route path="about" component={Message}/>
  </Route>
);

export default routes;
