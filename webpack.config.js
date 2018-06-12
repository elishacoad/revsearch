var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var webpack = require("webpack");

var BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
    mode: "development",
    entry: [
        "./src/index.js"
    ],

    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "reVsearch",
            template: "src/config/index.ejs"
          })
    ],

    resolve: {
        alias: {
          Containers: path.resolve(__dirname, 'src/app/components/containers'),
          Presentationals: path.resolve(__dirname, 'src/app/components/presentationals'),
          Elements: path.resolve(__dirname, 'src/app/components/elements'),
          Globals: path.resolve(__dirname, 'src/app/globals'),
          Actions: path.resolve(__dirname, 'src/app/redux/actions'),
          Reducers: path.resolve(__dirname, 'src/app/redux/reducers'),
          Style$: path.resolve(__dirname, 'src/app/stylesheets/index.css'),
          Constants$: path.resolve(__dirname, 'src/app/globals/constants.js'),
        }
    },

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