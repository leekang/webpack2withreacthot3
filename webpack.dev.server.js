var serverConf = {
    proxy:[{
        context:['flow','getCurrentUser','switchUser'],
        target: 'http://test.kaoqin.xxx.org',
        changeOrigin: true
    }]
}


module.exports = serverConf;