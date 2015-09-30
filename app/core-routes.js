import React from 'react';
import createLocation from 'history/lib/createLocation';
import { RoutingContext, match} from 'react-router'
import { renderToString } from 'react-dom/server'
import routes from './routes';

module.exports = function(app) {

  app.use(function (req, res) {
    let location = createLocation(req.url);

    match({routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation)
        res.redirect(301, redirectLocation.pathname + redirectLocation.search)
      else if (error)
        res.status(500).send(error.message);
      else if (renderProps == null)
        res.status(404).send('Not found');
      else {
        let reactHtml = renderToString(<RoutingContext {...renderProps}/>);
        res.render('index.ejs', {reactOutput: reactHtml});
      }
    })
  });

};
