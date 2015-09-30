// var React = require('react/addons'),
// ReactApp = React.createFactory(require('./components/App.react.js'));
//
// // import React from 'react';
// // import Router,{Location} from 'react-router';
//
// let routes = require('./routes');
// import createLocation from 'history/lib/createLocation'
// import Router, { RoutingContext, match } from 'react-router'


import React from 'react';
import createLocation from 'history/lib/createLocation';
import {RoutingContext, match} from 'react-router';
import routes from './routes';


module.exports = function(app) {

  app.use('/*', function (req, res) {
    let location = createLocation(req.url);

    match({routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation)
        res.redirect(301, redirectLocation.pathname + redirectLocation.search)
      else if (error)
        res.send(500, error.message)
      else if (renderProps == null)
        res.send(404, 'Not found')
      else {
        res.send(React.renderToString(<RoutingContext {...renderProps}/>))
      }
    })
  });

  // app.get('/', function(req, res){
  //   // React.renderToString takes your component
  //   // and generates the markup
  //   var reactHtml = React.renderToString(ReactApp({}));
  //   // Output html rendered by react
  //   // console.log(myAppHtml);
  //   res.render('index.ejs', {reactOutput: reactHtml});
  // });
  //
  // //Route not found -- Set 404
  // app.get('*', (req, res) => {
  //   res.json({
  //     'route': 'Sorry this page does not exist!'
  //   });
  // });
};
