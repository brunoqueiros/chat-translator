var React = require('react/addons'),
ReactApp = React.createFactory(require('./components/App.react.js'));

module.exports = function(app) {

  app.get('/', function(req, res){
    // React.renderToString takes your component
    // and generates the markup
    var reactHtml = React.renderToString(ReactApp({}));
    // Output html rendered by react
    // console.log(myAppHtml);
    res.render('index.ejs', {reactOutput: reactHtml});
  });

  //Route not found -- Set 404
  app.get('*', (req, res) => {
    res.json({
      'route': 'Sorry this page does not exist!'
    });
  });
};
