<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-25 10:59:46
 * @LastEditTime: 2019-11-25 12:02:20
 * @LastEditors: 靳肖健
 -->

<template>
  <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
    <div>
      <el-form label-position="top">
        <el-form-item label="模板类型">
          <el-radio-group v-model="form.type" size="small">
            <el-radio-button label="ym">页面</el-radio-button>
            <el-radio-button label="bd">表单</el-radio-button>
            <el-radio-button label="ajax">ajax</el-radio-button>
            <el-radio-button label="js">JavaScript</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="模板">
          <el-input type="input" :rows="5" placeholder="请输入内容" v-model="form.model"></el-input>
        </el-form-item>
        <el-form-item label="代码">
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="form.textarea"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">关闭</el-button>
      <el-button type="primary" @click="saveModel">确 定</el-button>
    </span>
  </el-dialog>
</template>


<script>
export default {
  props: ["showDialog"],
  data() {
    return {
      form: {},
      dialogVisible: false,
    };
  },
  created() {
    this.initForm();
  },
  methods: {
    initForm() {
      this.form = {
        type: "",
        model: "",
        textarea: "",
      };
    },
    saveModel() {
      var str = this.form.textarea;
      this.form.textarea = encodeURI(str);
      var json = JSON.stringify(this.form);
      console.log(json);
    },
  },
  watch: {
    showDialog(val) {
      if (val) {
        this.initForm();
      }
      this.dialogVisible = !!val;
    },
  },
};
</script>