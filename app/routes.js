import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import Home from './components/Home.react';
import App from './components/App.react';
import ChatRoom from './components/ChatRoom.react';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="chat" component={ChatRoom}/>
  </Route>
);

export default routes;
