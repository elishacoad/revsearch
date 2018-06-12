var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var webpack = require("webpack");

var BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
    entry: [
        "./src/index.js"
    ],

    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            favicon: 'src/config/favicon.ico',
            template: "src/config/index.html"
          })
    ],

    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: "babel-loader"
                 }
        },
        {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
      ]
    }
  };