<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:36:52
 * @LastEditTime: 2019-11-25 11:12:38
 * @LastEditors: 靳肖健
 -->
<template>
  <el-container style="max-width:100vw;min-height:100vh">
    <el-header style="height:5vw;line-height:5vw;background:rgb(64, 158, 255)">
      <h1 style="font-size:2vw;color:rgba(0,0,0,0.6)">formData辅助模板系统</h1>
    </el-header>
    <el-container>
      <el-header style="background:rgba(64, 158, 255,0.5);min-height:5vw;height:auto">
        <DataSelect />
      </el-header>
      <el-main>
        <DataArea />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import DataArea from "../components/DataArea";
import DataSelect from "../components/DataSelect";

export default {
  name: "Formdata",
  components: {
    DataArea,
    DataSelect,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      showDialog: 0,
    };
  },
  methods: {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
