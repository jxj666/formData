<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:36:52
 * @LastEditTime: 2019-11-26 10:46:54
 * @LastEditors: 靳肖健
 -->
<template>
  <el-container style="max-width:100vw;min-height:100vh">
    <el-header style="height:5vw;line-height:5vw;background:#1f2d3d;">
      <h1 style="font-size:2vw;color:rgb(183, 195, 210)">formData辅助模板系统</h1>
    </el-header>
    <el-container>
      <el-header style="background:rgb(50, 65, 87);min-height:5vw;height:auto">
        <DataSelect :dataArr="dataArr" @textareaChange="textareaChange" />
      </el-header>
      <el-main>
        <DataArea :textarea="textarea" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import DataArea from "../components/DataArea";
import DataSelect from "../components/DataSelect";
import dataArr from "../assets/data.js";

export default {
  name: "Formdata",
  components: {
    DataArea,
    DataSelect,
  },
  props: {
    msg: String,
    dataArr: dataArr,
  },
  data() {
    return {
      showDialog: 0,
      textarea: "",
    };
  },
  methods: {
    textareaChange(val) {
      this.textarea = val;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
