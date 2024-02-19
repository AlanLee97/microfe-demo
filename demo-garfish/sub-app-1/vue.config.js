const packageName = require('./package.json').name;

module.exports = {
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${packageName}`,
      // 修改不规范的代码格式，避免逃逸沙箱
      globalObject: 'window',
      // publicPath: 'http://localhost:8081',
    }
  }
}