//webpack打包所用的webpack配置
var webpack = require("webpack");

var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

var WebpackMd5Hash = require('webpack-md5-hash');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
//打包后资源的路径
var ASSETS_BUILD_PATH = path.resolve(__dirname, './dist/static');

var config = require('./webpack.base.config');

config.output.filename = '[name].[chunkhash].js';
 
config.module.rules.push({   //这里的内容是新增加的对样式的支持
    test: /\.(less|css)$/,
    use: ExtractTextPlugin.extract({fallback: 'style-loader',use:["css-loader","less-loader"]})
});

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    
    new CleanWebpackPlugin([ASSETS_BUILD_PATH]),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
        filename: '../index.html',
        template: './index.html',
        inject:false
    }),
    new ExtractTextPlugin({
        filename:'[name].[contenthash].css',
        allChunks:true
    })
);
module.exports = config;
