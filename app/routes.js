import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home/Index.react';
import ChatRoom from './components/ChatRoom/Index.react';
import App from './components/App.react';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="chat" component={ChatRoom}/>
  </Route>
);

export default routes;
