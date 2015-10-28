import path from "path";

const dist = path.resolve(__dirname, "../public");
const host = process.env.HOST || "0.0.0.0";
const port = (process.env.PORT + 1) || 3001;
const config = {
  entry: './app/app.js',

  output: {
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
    path: dist,
    publicPath: "http://" + host + ":" + port + "/public/"
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};

export default config
