<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:36:52
 * @LastEditTime: 2019-11-22 16:53:12
 * @LastEditors: 靳肖健
 -->
<template>
  <div style="padding:1vw 1vw 0">
    <el-form ref="form" label-width="80px" label-position="left">
      <el-form-item label="模板类型">
        <el-radio-group v-model="test" size="small">
          <el-radio-button label="ym">页面</el-radio-button>
          <el-radio-button label="bd">表单</el-radio-button>
          <el-radio-button label="ajax">ajax</el-radio-button>
          <el-radio-button label="js">JavaScript</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="模板">
        <el-radio-group v-model="test">
          <el-radio-button label="1">1</el-radio-button>
          <el-radio-button label="2">2</el-radio-button>
          <el-radio-button label="3">3</el-radio-button>
          <el-radio-button label="4">4</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DataSelect",
  props: {},
  data() {
    return {
      test: "",
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
