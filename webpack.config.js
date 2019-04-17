/* eslint-disable */
const webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = {
  build: __dirname + '/build/',
  develop: __dirname + '/static'
}


module.exports = {

  entry: [
    'babel-polyfill',
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    'react-hot-loader/patch',
    // 'font-awesome-webpack',
    './src/index.jsx'
  ],

  devtool: 'eval-source-map',

  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: 'http://localhost:3000/',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl$/, // Only .css files
        loader: 'style-loader!css-loader!stylus-loader' // Run both loaders
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "url-loader?limit=25000",
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      },
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css','styl', '.less'],
  },
  watchOptions: {
    poll: 1000,
    aggregateTimeout: 1000
  },
  devServer: {
    contentBase: PATHS.develop,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    stats: { colors: true },

    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3000',
  },
  plugins: [
    new webpack.DefinePlugin({
      // tell modules we are in development
      'process.env': {'NODE_ENV': JSON.stringify('development')},
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ 
      template: './static/index.html', 
      filename: './index.html' 
    })
  ]
};