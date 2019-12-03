<!--
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2019-11-25 10:59:46
 * @LastEditTime: 2019-12-03 20:58:12
 * @LastEditors: 靳肖健
 -->

<template>
  <el-row :gutter="10" style="margin:1vw;min-width:666px">
    <el-col :span="12" style="background:#eee;padding:1vw">
      <div>
        <h3>参数配置区</h3>
        <div class="h_1"></div>
      </div>
      <el-form label-position="left" label-width="100px">
        <el-form-item label="表单父对象">
          <el-input size="small" type="input" placeholder="请输入内容" v-model="form.parent"></el-input>
        </el-form-item>
        <el-form-item label="变量标题">
          <el-tooltip class="item" content="决定是否有表单标题(可选)">
            <el-input size="small" type="input" placeholder="请输入内容" v-model="form.label"></el-input>
          </el-tooltip>
        </el-form-item>
        <el-form-item label="必填符号" v-if="form.label">
          <el-radio-group v-model="form.required">
            <el-radio-button label="false">否</el-radio-button>
            <el-radio-button label="true">是</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="变量名">
          <el-input size="small" type="input" placeholder="请输入内容" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="模板类型">
          <el-radio-group v-model="form.type" size="small">
            <el-radio v-for="(x,index) in typeList" :key="index" :label="x.value">{{x.name}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="失能条件">
          <el-input size="small" type="input" placeholder="请输入内容" v-model="form.disabled"></el-input>
        </el-form-item>

        <el-form-item label="上一级级联">
          <el-input size="small" type="input" placeholder="请输入内容" v-model="form.upLevel"></el-input>
        </el-form-item>
        <div>
          <div v-if=" form.type=='radio' || form.type=='checkbox' ">
            <el-form-item label="数组名">
              <el-tooltip
                class="item"
                effect="dark"
                content="数组结构应为: [{label:'选项名',trueLabe:'选中值',falseLabel:'不选值'}]"
                placement="top"
              >
                <el-input size="small" type="input" placeholder="请输入内容" v-model="form.arr"></el-input>
              </el-tooltip>
            </el-form-item>
          </div>
          <div v-if="form.type=='select' ">
            <el-form-item label="数组名/数组">
              <el-tooltip class="item" content="数组结构应为: [{label:'选项名',value:'选项值'}]">
                <el-input size="small" type="input" placeholder="请输入内容" v-model="form.arr"></el-input>
              </el-tooltip>
            </el-form-item>
          </div>
        </div>
        <div>
          <el-button type="warning" @click="initForm">表单重置</el-button>
          <el-button
            type="success"
            v-clipboard="()=>str"
            v-clipboard:success="clipboardSuccessHandler"
          >复制表单</el-button>
        </div>
        <div class="h_1"></div>
        <div>
          <el-button type="danger" @click="clearStorage">清除暂存</el-button>
          <el-button type="primary" @click="saveStorage">暂存代码</el-button>
        </div>
      </el-form>
    </el-col>
    <el-col :span="12" style="background:#eee;padding:1vw">
      <div>
        <h3>代码展示区</h3>
        <div class="h_1"></div>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 9, maxRows: 99}"
        placeholder="请输入内容"
        v-model="str"
      ></el-input>
      <div class="h_1"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 9, maxRows: 99}"
        placeholder="暂存区域"
        v-model="storage"
      ></el-input>
    </el-col>
  </el-row>
</template>


<script>
export default {
  props: [],
  data() {
    return {
      storage: "",
      form: {},
      typeList: [],
    };
  },
  created() {
    this.initForm();
    this.getTypeList();
  },
  computed: {
    str() {
      var i, k;
      var obj = JSON.parse(JSON.stringify(this.form));
      for (i in obj) {
        if (obj[i]) {
          k = true;
        }
      }
      if (k) {
        var html = `<hfq-data-ele 
        :formObj="{ 
          type:'${this.form.type}',
          name:'${this.form.name}',
          ${this.form.name ? `required: ${this.form.required},` : ``}
          ${this.form.arr ? `arr: ${this.form.arr},` : ``}
          ${this.form.disabled ? `disabled: ${this.form.disabled},` : ``}
          ${this.form.label ? `label: '${this.form.label}',` : ``}
          }"
        :dataObj="${this.form.parent}" 
        ></hfq-data-ele>`;
        var html2 = html.replace(/[\s\f\n\r]+/gim, " ");
        return html2;
      } else {
        return "";
      }
    },
  },
  methods: {
    clipboardSuccessHandler({ value }) {
      console.log("复制", value);
      const h = this.$createElement;
      this.$notify({
        title: "成功",
        message: h("i", { style: "color: green" }, "复制成功!"),
      });
    },
    clearStorage() {
      this.storage = "";
    },
    saveStorage() {
      this.storage = this.storage + "\n" + this.str;
    },
    getTypeList() {
      this.typeList = [
        { name: "选择框", value: "select" },
        { name: "单选框", value: "radio" },
        { name: "多选框", value: "checkbox" },
        { name: "数字框", value: "inputNumber" },
        { name: "时间", value: "time" },
        { name: "日期", value: "date" },
        { name: "日期时间", value: "datetime" },
        { name: "文字", value: "input" },
        { name: "数字", value: "number" },
        { name: "文本", value: "textarea" },
        { name: "网站", value: "url" },
      ];
    },
    initForm() {
      this.form = {
        arr: "",
        type: "",
        name: "",
        parent: "",
        disabled: "",
        upLevel: "",
        label: "",
        required: false,
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