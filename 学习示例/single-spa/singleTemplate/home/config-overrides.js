/*
 * @Description: 
 * @Version: 
 * @Author: BeSmile
 * @Date: 2021-11-05 12:25:03
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-11-05 15:29:51
 */
const  { StatsWriterPlugin } = require("webpack-stats-plugin");
module.exports = {
  webpack: function(config, env) {
    require("react-app-rewire-postcss")(config, {
      plugins: (loader) => {
        console.log(loader)
        return [
          require("postcss-flexbugs-fixes"),
          require("postcss-preset-env")({
            autoprefixer: {
              flexbox: "no-2009",
            }
          }),
          require("postcss-selector-namespace")({
            namespace(css) {
              // 前缀，如果有全局样式不需要添加的，也可以在这里过滤
              return ".micro-frontend-home";
            },
          }),
        ]
      }
    });
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