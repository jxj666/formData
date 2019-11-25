<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:14:23
 * @LastEditTime: 2019-11-22 16:49:21
 * @LastEditors: 靳肖健
 -->
<template>
  <div id="app">
    <Formdata msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Formdata from "./pages/Formdata.vue";

export default {
  name: "app",
  components: {
    Formdata,
  },
};
</script>


<style lang='scss'>
@import "./assets/reset.scss";
</style>
