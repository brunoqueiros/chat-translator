require("babel/register");

require('./app/server')(function (app) {
  console.log('Server is Up and Running at Port : ' + app.get('port'));

  if (app.get("env") === "development") {
    require("./webpack/server")();
  }
});
