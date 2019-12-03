<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-22 15:36:52
 * @LastEditTime: 2019-12-02 12:00:03
 * @LastEditors: 靳肖健
 -->
<template>
  <div style="padding:1vw 1vw 0" class="dataSelect">
    <el-form ref="form" label-width="80px" label-position="left">
      <el-form-item label="模板类型">
        <el-radio-group v-model="type" size="small">
          <el-radio-button label="ym">页面</el-radio-button>
          <el-radio-button label="bd">表单</el-radio-button>
          <el-radio-button label="ajax">ajax</el-radio-button>
          <el-radio-button label="js">JavaScript</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="模板">
        <el-radio-group v-model="textarea" size="mini">
          <el-radio-button
            v-for="(x,index) in modelList"
            :key="index"
            :label="x.textarea"
          >{{x.model}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import dataArr from "../assets/data";
export default {
  name: "DataSelect",
  props: {
    dataArr: Array,
  },
  data() {
    return {
      type: "",
      model: "",
      textarea: "",
      modelList: [],
    };
  },
  created() {},
  methods: {},
  watch: {
    type(val) {
      console.log(val);
      var arr = dataArr.filter(x => {
        return x.type == val;
      });
      this.textarea = "";
      this.modelList = arr || [];
    },
    textarea(val) {
      this.$emit("textareaChange", val);
    },
  },
};
</script>
<style lang="scss">
</style>
