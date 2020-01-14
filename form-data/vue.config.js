/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-25 11:41:46
 * @LastEditTime : 2020-01-14 21:01:42
 * @LastEditors  : 靳肖健
 */
module.exports = {
  publicPath: '/form_data/dist/',
  lintOnSave: true,
  devServer: {
    proxy: {
      // proxy all requests starting with /api to jsonplaceholder
      '/php': {
        target: 'http://m.jxjweb.top/form_data/php',   //代理接口
        changeOrigin: true,
      }
    }
  }
}