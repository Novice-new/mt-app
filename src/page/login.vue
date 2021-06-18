<template>
  <div class="login">
    <div class="login-header">
      <router-link :to="{name:'index'}">
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
          alt=""
        >
      </router-link>
    </div>
    <div class="login-body">
      <img
        src="https://s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
        alt=""
      >
      <div class="login-form">
        <div
          class="validate-info"
          :class="{hide:!showWarning}"
        >
          <i class="el-icon-remove-outline"></i>
          {{warnimg}}
        </div>
        <div class="login-type">
          <span class="normal">账号登录</span>
          <span class="security-code-login">
            手机动态码登录
            <i class="el-icon-mobile-phone"></i>
          </span>
        </div>
        <div class="form-phone form-input">
          <i class="el-icon-s-custom"></i>
          <input
            type="text"
            placeholder="用户名"
            v-model="formData.userName"
            @focus="showWarning = false"
          >
        </div>
        <div class="form-password form-input">
          <i class="el-icon-unlock"></i>
          <input
            @focus="showWarning = false"
            type="password"
            placeholder="密码"
            v-model="formData.password"
          >
        </div>
        <div class="forget">
          <span>忘记密码？</span>
        </div>
        <div class="submit">
          <button @click="submit">登录</button>
        </div>
        <div class="register-guide">
          <span>还没有账号？ </span>
          <router-link :to="{name:'register'}">免费注册</router-link>
        </div>
        <div class="title">
          <h3>
            <span>用合作网站账号登录</span>
          </h3>
        </div>
        <div class="oauth">
          <span class="iconfont icon-qq"></span>
          <span class="iconfont icon-weibo"></span>
        </div>
      </div>
    </div>
    <footer>
      <ul class="footer-nav">
        <li>关于美团</li>
        |
        <li>加入我们</li>
        |
        <li>商家入驻</li>
        |
        <li>帮助中心</li>
        |
        <li>美团手机版</li>
      </ul>
      <div class="copyright">
        <p>
          ©<span>2021</span>
          <a href="https://www.meituan.com">美团网团购</a>
          meituan.com
          <a
            href="http://www.miibeian.gov.cn/"
            target="_blank"
          >京ICP证070791号</a>
          京公网安备11010502025545号
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import tool from '@/api/tools';
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      formData: {
        userName: '',
        password: '',
      },
      showWarning: false,
      errArr: ['请输入账号和密码', '请输入账号', '请输入密码', '账号或密码错误，请重新输入'],
      warnimg: '',
    };
  },
  methods: {
    ...mapMutations(['setUserName']),
    submit() {
      const { userName, password } = this.formData;
      if (!userName && !password) {
        this.warnimg = '请输入账号和密码';
        this.showWarning = true;
        return;
      } if (!userName && password) {
        this.warnimg = '请输入账号';
        this.showWarning = true;
        return;
      } if (userName && !password) {
        this.warnimg = '请输入密码';
        this.showWarning = true;
        return;
      }
      tool.login(this.formData).then((res) => {
        console.log(res);
        this.setUserName(this.formData.userName);
        this.$router.push({ name: 'index' });
      }).catch((err) => {
        if (typeof (err) !== 'object') {
          this.warnimg = err;
          this.showWarning = true;
        }
      });
    },
  },
};
</script>
<style lang="less">
@import "../assets/css/login/index.less";
</style>
