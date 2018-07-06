var path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
webpack = require('webpack'); //这里引入webpack是为了使用webpack的热更新功能以及其他自带插件，见 module.exports.plugins
module.exports = {
    context:path.resolve(__dirname, './app'),//基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    entry: {app:[
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index.jsx'
    ]},
    output:{
        path:path.resolve(__dirname, './dist/static'),
        filename:"[name].bundle.js",
        publicPath:'/'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader:"react-hot-loader/webpack"
                },{
                    loader: "babel-loader",
                    options: { presets: ["react","es2015"] }
                }],
            },
            {   //这里的内容是新增加的对样式的支持
                test: /\.(less|css)$/,
                use: ["css-hot-loader","style-loader"].concat(ExtractTextPlugin.extract(["css-loader","less-loader"])),
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['./dist/static']),
        new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin({
            filename:'app.bundle.css',
            allChunks:true
        }),  
        // 当接收到热更新信号时，在浏览器console控制台打印更多可读性高的模块名称等信息
        new webpack.NamedModulesPlugin()
    ],
    resolve: {//这个地方是忽略这些文件的后缀
        extensions: ['.js', '.jsx', '.scss','.less','.css']
    },
    devServer:{
        hot:true
    }
},

{
  "name": "testapp1",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "./node_modules/.bin/webpack-dev-server --content-base dist",
    "build": "./node_modules/.bin/webpack",
    "start": "webpack-dev-server --content-base dist --inline --open"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.17",
    "css-hot-loader": "^1.3.4",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^2.1.2",
    "html-webpack-plugin": "^2.30.1",
    "less": "^2.7.3",
    "less-loader": "^4.0.5",
    "react-hot-loader": "^3.1.3",
    "style-loader": "^0.19.0",
    "webpack": "^2.4.1",
    "webpack-dev-server": "^2.9.7"
  },
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0"
  }
}


