require("babel/register");

import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Make sure to include the JSX transpiler
// require('node-jsx').install();

// Include static assets. Not advised for production
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));
// Set view path
app.set('views', path.join(__dirname, 'app/views'));
// set up ejs for templating. You can use whatever
app.set('view engine', 'ejs');

// Set up Routes for the application
require('./app/core-routes.js')(app);

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
