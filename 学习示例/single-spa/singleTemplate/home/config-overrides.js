/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-05 12:25:03
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-05 14:15:47
 */
const  { StatsWriterPlugin } = require("webpack-stats-plugin");
module.exports = {
  webpack: function(config, env) {
    // 应用名称
    config.output.library = 'home';
    config.output.libraryTarget = "window";
    // 默认是"/"，因为子应用资源是在基座中执行的，需要重新指定，这里为了演示方便直接写死
    config.output.publicPath = 'http://localhost:3001/';
    config.plugins.push(
      new StatsWriterPlugin({
        fields: ['entrypoints', 'publicPath'],
        filename: "manifest.json" // 文件名称
      })
    )
    return config;
  },
  // 解决跨域问题
  devServer: function(configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.disableHostCheck = true
      config.headers = config.headers || {}
      config.headers['Access-Control-Allow-Origin'] = '*'
      return config
    }
  }
  
}