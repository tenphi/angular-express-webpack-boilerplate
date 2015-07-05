var Webpack = require('webpack');
var StatsPlugin = require('stats-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer-core');
var csswring = require('csswring');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var assetsPath = path.resolve(__dirname, 'public', 'assets');
var entryPath = path.resolve(__dirname, 'frontend', 'app.es6.js');
var host = process.env.APP_HOST || 'localhost';

var config = {

  // We change to normal source mapping
  devtool: 'source-map',
  entry: entryPath,
  output: {

    // We need to give Webpack a path. It does not actually need it,
    // because files are kept in memory in webpack-dev-server, but an
    // error will occur if nothing is specified. We use the assetsPath
    // as that points to where the files will eventually be bundled
    // in production
    path: assetsPath,
    filename: 'bundle.js',

    // Everything related to Webpack should go through a assets path,
    // localhost:3000/assets. That makes proxying easier to handle
    publicPath: '/assets/'
  },
  module: {

    loaders: [
      { test: /\.es6.js$/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('css?sourceMap!postcss-loader?sourceMap!less?sourceMap')
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }

    ]
  },
  postcss: [autoprefixer, csswring],

  plugins: [
    // We have to manually add the Hot Replacement plugin when running
    // from Node
    new ExtractTextPlugin("styles.css"),
    new Webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new StatsPlugin(path.join(__dirname, 'stats.json'), { chunkModules: true })
  ]
};

module.exports = config;