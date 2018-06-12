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
            title: "reVsearch",
            template: "src/config/index.ejs"
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
        },
        {
            test: /\.(ico|png|svg|jp(e*)g)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000,
                    name: 'src/images/[name].[ext]'
                }
            }]
        }
      ]
    }
  };