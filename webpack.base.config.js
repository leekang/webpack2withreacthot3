var path = require('path'),
webpack = require('webpack'); //这里引入webpack是为了使用webpack的热更新功能以及其他自带插件，见 module.exports.plugins

//配置一些常量
// 源代码的根目录（本地物理文件路径）
const SRC_PATH = path.resolve(__dirname,'./app');
//打包后资源的路径
const ASSETS_BUILD_PATH = path.resolve(__dirname, './dist/static');
// 资源根目录（可以是 CDN 上的绝对路径，或相对路径）
//const ASSETS_PUBLIC_PATH = '/assets/';
module.exports = {
    context:SRC_PATH,//基础目录，绝对路径，用于从配置中解析入口起点(entry point)和 loader
    entry: {app:[
        './index.jsx'
    ]},
    output:{
        path:ASSETS_BUILD_PATH,
        filename:"[name].bundle.js",
        publicPath:'static/'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: { presets: ["react","es2015"] }
                }],
            }
        ]
    },
    plugins: [
        
    ],
    resolve: {//这个地方是忽略这些文件的后缀
        extensions: ['.js', '.jsx', '.scss','.less','.css'],
        alias: {
            'core': path.resolve(__dirname, './app/core'),
            'server': path.resolve(__dirname,'./app/server')
        }

    }
}

