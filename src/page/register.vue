<template>
  <div class="page-register">
    <div class="header">
      <header>
        <router-link :to="{name:'index'}">
          <img
            src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
            alt=""
          >
        </router-link>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="userName"
        >
          <el-input
            type="text"
            v-model="registerForm.userName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            type="password"
            v-model="registerForm.password"
            autocomplete="off"
            @input="input"
          ></el-input>
          <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div>
        </el-form-item>
        <el-form-item
          label="确认密码"
          prop="rePassword"
        >
          <el-input
            type="password"
            v-model="registerForm.rePassword"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submitForm('registerForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer>
      <p class="copyright">
        ©<a
          class="f1"
          href="https://www.meituan.com"
        >meituan.com</a>&nbsp;
        <a
          class="f1"
          target="_blank"
          href="http://www.miibeian.gov.cn/"
        >京ICP证070791号</a>&nbsp;
        <span class="f1">京公网安备11010502025545号</span>
      </p>
    </footer>
  </div>
</template>
<script>
import tool from '@/api/tools';

export default {
  data() {
    const validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else if (value.length < 4 || value.length > 16) {
        callback(new Error('用户名必须为4-16位的字母数字下划线组成'));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.rePassword !== '') {
          this.$refs.registerForm.validateField('rePassword');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        userName: '',
        password: '',
        rePassword: '',
      },
      strengthClass: '',
      rules: {
        userName: [{ validator: validateUser, trigger: 'blur' }],
        pass: [{ validator: validatePass, trigger: 'blur' }],
        rePassword: [{ validator: validatePass2, trigger: 'blur' }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          tool.register(this.registerForm).then((res) => {
            console.log(res, 'success');
            this.$router.push({ name: 'login' });
          }).catch((err) => {
            console.log(err, 'error');
          });
        } else {
          console.log('error submit!!');
        }
      });
    },
    input() {
      const regStr = /(\w)+/g;
      const regNum = /(\d)+/g;
      const reg = /_/g;
      const strongth = this.registerForm.password.match(reg)
        && this.registerForm.password.match(regStr)
        && this.registerForm.password.match(regNum);
      if (
        this.registerForm.password.length > 20
        || (this.registerForm.password.length > 6 && strongth)
      ) {
        this.strengthClass = 'strong';
      } else if (this.registerForm.password.length < 6) {
        this.strengthClass = 'week';
      } else if (!this.registerForm.password) {
        this.strengthClass = '';
      } else {
        this.strengthClass = 'normal';
      }
    },
  },
};
</script>
<style lang="less">
@import "../assets/css/register/index.less";
</style>
