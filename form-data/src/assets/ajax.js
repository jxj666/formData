/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2020-01-15 11:44:08
 * @LastEditTime : 2020-01-15 14:28:37
 * @LastEditors  : 靳肖健
 */
import axios from "axios";

var baseUrl = ''
if (location.host == "m.jxjweb.top") {
  baseUrl = "./php/api";
} else {
  baseUrl = "/api";
}
// var req = {
//   that: 'this',
//   url: '请求路径',
//   method: '请求方式',
//   success: () => { },
//   error: () => { }
// }
function ajax (req) {
  axios({
    method: req.method || "get",
    url: `${baseUrl}${req.url}`,
    data: req.data
  })
    .then(function (res) {
      console.log(req, res.data)
      if (res.data.code == 1) {
        req.success && req.success(res.data)
      } else {
        req.error && req.error(res.data)
      }
    })
    .catch(function (error) {
      req.error && req.error(error)
    })
}
export default ajax;