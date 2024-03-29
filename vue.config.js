const { appName } = require('./package');

module.exports = {
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : './',

  pages: {
    index: {
      entry: 'entry/main',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'pc-template-vue3-antdv',
    },
  },

  lintOnSave: process.env.NODE_ENV !== 'production',

  productionSourceMap: false,

  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // "primary-color": "#1DA57A",
            // "link-color": "#1DA57A",
            // "border-radius-base": "2px",
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:8087',
    // 监听端口
    // port: 10200,
    // 关闭主机检查，使微应用可以被 fetch
    disableHostCheck: true,
    // 配置跨域请求头，解决开发环境的跨域问题
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    /* resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    }, */
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: `${appName}`,
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
      // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      jsonpFunction: `webpackJsonp_${appName}`,
    },
  },
};
