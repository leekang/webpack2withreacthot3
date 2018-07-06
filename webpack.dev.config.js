//这是起服务的webpack的配置文件
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AppConf = require('./app.conf.js');
var config = require('./webpack.base.config');
var WebpackServer = require('./webpack.dev.server');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

//添加webpack-dev-server的一些配置项
config.devServer = {
    port:AppConf.port,
    host:AppConf.serverName,
    contentBase:path.resolve(__dirname,'./app'),
    open:true,
    hot:true,
    proxy:[{
        context:['/flow','/getCurrentUser','/switchUser','/comm'],
        target: '',
        changeOrigin: true
    }]
}

//devserver打包后的资源不会输出为具体的文件他只是一个写入内存里面的一个文件。
config.output.publicPath = "/";//这个地方其实是资源的路径，需要和devServer里面的publicPath路径保持一致默认是'\',这样的话就可以看到当时改的文件。

config.devtool = 'source-map';


config.module.rules[0].use.unshift({
    loader:"react-hot-loader/webpack"
});

//["css-hot-loader","style-loader"].concat(ExtractTextPlugin.extract(["css-loader","less-loader"]
config.module.rules.push({   //这里的内容是新增加的对样式的支持
    test: /\.(less|css)$/,
    use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({fallback: 'style-loader',use:["css-loader","less-loader"]}))
});

Object.keys(config.entry).forEach((key)=>{
    if(Array.isArray(config.entry[key])){
        config.entry[key].unshift(
            'react-hot-loader/patch',
            'webpack-dev-server/client',
            'webpack/hot/only-dev-server'
        )
    }
});

config.plugins.push(
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.html',
        inject:false
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
        filename:'[name].bundle.css',
        allChunks:true
    }),
    
    new webpack.NamedModulesPlugin()
    
)

module.exports = config;