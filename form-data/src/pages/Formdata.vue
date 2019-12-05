<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:36:52
 * @LastEditTime: 2019-12-05 14:57:58
 * @LastEditors: 靳肖健
 -->
<template>
  <el-container style="max-width:100vw;min-height:100vh">
    <el-header style="height:5vw;line-height:5vw;background:#1f2d3d;">
      <h1 style="font-size:2vw;color:rgb(183, 195, 210)">formData辅助模板系统</h1>
    </el-header>
    <el-container>
      <div style="width:100%">
        <el-tabs style="padding:1vw" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="静态模板" name="jtmb">静态模板</el-tab-pane>
          <el-tab-pane label="HfqDataEle模板" name="elemb">HfqDataEle模板</el-tab-pane>
          <el-tab-pane label="HfqDataFrom模板" name="arrmb">HfqDataFrom模板</el-tab-pane>
        </el-tabs>
        <el-container v-if="activeName=='jtmb'">
          <el-header style="min-height:5vw;height:auto">
            <DataSelect :dataArr="dataArr" @textareaChange="textareaChange" />
          </el-header>
          <el-main>
            <DataArea :textarea="textarea" />
          </el-main>
        </el-container>
        <el-container v-else-if="activeName=='elemb'">
          <DataEle type="elemb" />
        </el-container>
        <el-container v-else-if="activeName=='arrmb'">
          <DataEle type="arrmb" />
        </el-container>
      </div>
    </el-container>
  </el-container>
</template>

<script>
import DataArea from "../components/DataArea";
import DataSelect from "../components/DataSelect";
import DataEle from "../components/DataEle";
import dataArr from "../assets/data.js";

export default {
  name: "Formdata",
  components: {
    DataArea,
    DataSelect,
    DataEle,
  },
  props: {
    msg: String,
    dataArr: dataArr,
  },
  data() {
    return {
      showDialog: 0,
      textarea: "",
      activeName: "elemb",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    textareaChange(val) {
      this.textarea = val;
    },
  },
};
</script>
<style>
</style>
