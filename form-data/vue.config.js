/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-25 11:41:46
 * @LastEditTime : 2020-01-15 11:26:00
 * @LastEditors  : 靳肖健
 */
module.exports = {
  publicPath: '/form_data/dist/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://m.jxjweb.top/form_data/dist/php',
        ws: true,
        changeOrigin: true
      },
    }
  }
}