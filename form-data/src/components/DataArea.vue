<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:36:52
 * @LastEditTime: 2019-12-03 20:35:21
 * @LastEditors: 靳肖健
 -->
<template>
  <div style="width:100%;height:50vh;">
    <div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 9, maxRows: 99}"
        placeholder="请输入内容"
        v-model="str"
      ></el-input>
    </div>
    <div style="padding:1vw">
      <el-button
        type="success"
        v-clipboard="()=>str"
        v-clipboard:success="clipboardSuccessHandler"
      >复制</el-button>
      <el-button type="primary" @click="dialogShow">录入</el-button>
    </div>
    <DataForm :showDialog="showDialog" />
  </div>
</template>
<script>
import DataForm from "./DataForm";

export default {
  name: "DataArea",
  props: {
    textarea: String,
  },
  components: {
    DataForm,
  },
  data() {
    return {
      showDialog: 0,
      str: "",
    };
  },
  methods: {
    dialogShow() {
      this.showDialog = +new Date();
    },
    clipboardSuccessHandler({ value }) {
      console.log("复制", value);
      const h = this.$createElement;
      this.$notify({
        title: "成功",
        message: h("i", { style: "color: green" }, "复制成功!"),
      });
    },
  },
  watch: {
    textarea(val) {
      this.str = decodeURI(val || "");
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
pre {
  color: #fff;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: 100%;
  max-height: 50vh;
  overflow: auto;
  background: rgba(0, 0, 0, 0.8);
  padding: 1vw;
  border-radius: 1vw;
  word-break: break-all;
}
</style>