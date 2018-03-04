/**
 * Created by ifchangetoclzp on 2016/6/28.
 */
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index: path.resolve(APP_PATH, 'index.js')
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:6].js',
        chunkFilename: 'js/[name].[hash:6].js'
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/
            }, {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css!px2rem!autoprefixer!sass')
            }, {
                test: /\.html$/,
                loader: 'ejs'
            }, {
                test: /\.(png|jpg|svg|gif)$/,
                loader: 'url',
                query: {
                    limit: 50000,
                    name: '[name].[ext]'
                }
            },{
                test:/\.mp3$/,
                loader:'file'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: path.resolve(APP_PATH, 'index.html'),
            chunks: ['index']
        }), new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            _: 'lodash',
            "window._": "lodash"
        }), new ExtractTextPlugin("[name].[hash:6].css")
    ],
    resolve: {
        extensions: ['', '.js']
    },
    devServer:{
        host:'0.0.0.0',
        disableHostCheck: true
    }

};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    module.exports.plugins = (module.exports.plugins || []).concat([
        new CleanWebpackPlugin(BUILD_PATH),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}