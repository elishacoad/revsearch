const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

// custom build directory, can be changed
const BUILD_DIR = path.resolve(__dirname, 'public');

module.exports = {
    mode: 'development',

    // the first two entry points enable "hot" CSS and auto-refreshes for JS
    entry: [
        'react-hot-loader/patch',
        // contains the entire app, can be changed locations but has to be the
        // highest rendering component, maps to html root
        './src/index.js',
    ],

    output: {
        path: BUILD_DIR,
        publicPath: '/',
        filename: 'bundle.js',
    },

    // hot-loader
    devServer: {
        contentBase: BUILD_DIR,
        hot: true,
    },

    plugins: [
        // hot module replacement refreshes JS
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'reVsearch',
            template: 'src/config/index.ejs',
        }),
    ],

    resolve: {
        modules: [__dirname, './node_modules'],
        // paths can be added to shorten paths
        alias: {
            Containers: path.resolve(__dirname, 'src/app/components/containers'),
            Presentationals: path.resolve(__dirname, 'src/app/components/presentationals'),
            Elements: path.resolve(__dirname, 'src/app/components/elements'),
            Globals: path.resolve(__dirname, 'src/app/globals'),
            Actions: path.resolve(__dirname, 'src/app/redux/actions'),
            Reducers: path.resolve(__dirname, 'src/app/redux/reducers'),
            Style$: path.resolve(__dirname, 'src/app/stylesheets/index.css'),
            Constants$: path.resolve(__dirname, 'src/app/globals/constants.js'),
        },
        extensions: ['*', '.js', '.jsx'],
    },

    // loaders for specific files and file types
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            /** svg */
            {
                test: /\.svg$/,
                loader: 'babel!svg-react',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(ico|png|svg|jp(e*)g)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'src/images/[name].[ext]',
                    },
                }],
            },
        ],
    },
};
