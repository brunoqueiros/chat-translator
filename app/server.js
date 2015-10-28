import express from 'express';
import path from 'path';
import http from 'http';
import socket from 'socket.io';

export default function(callback) {
  const app = express();
  const httpServer = http.Server(app);
  const server = socket(httpServer);

  app.set("env", process.env.NODE_ENV || 'development');
  app.set("host", process.env.HOST || '0.0.0.0');
  app.set("port", process.env.PORT || 3000);

  // Include static assets. Not advised for production
  app.use(express.static(path.resolve(__dirname, "../public")));

  // Set view path
  app.set('views', path.join(__dirname, 'views'));

  // set up ejs for templating. You can use whatever
  app.set('view engine', 'ejs');

  // Set up Routes for the application
  require('./core-routes.js')(app);

  return httpServer.listen(app.get('port'), () => callback(app));
}
