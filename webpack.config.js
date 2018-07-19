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
        clientLogLevel: 'none',
        historyApiFallback: true,
        // ignores extra logging
        stats: {
            colors: true,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: true,
            errorDetails: false,
            warnings: true,
            publicPath: false,
        },
    },
    // might be slower than eval-source-map but yields better mapped code
    // works well with third party tools, if too slow, switch to eval
    devtool: 'inline-source-map',

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
            Images: path.resolve(__dirname, 'src/images'),
            Style: path.resolve(__dirname, 'src/app/stylesheets'),
            Constants$: path.resolve(__dirname, 'src/app/globals/constants.js'),
        },
        extensions: ['*', '.js', '.jsx', '.ico'],
    },

    // loaders for specific files and file types
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                enforce: 'pre',
                options: {
                    emitWarning: true,
                    emitError: true, 
                    failonError: false,
                    configFile: './.eslintrc.json',
                },
            },
            {
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015'],
                },
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.(s*)css$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                
            },
            // "file" loader makes sure those assets get served by WebpackDevServer.
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                loader: 'file-loader',
                query: {
                    name: 'images/[name].[ext]',
                },
            },
        ],
    },
    stats: {
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: false,
    },
};
