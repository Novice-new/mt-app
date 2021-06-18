<template>
  <div class="life">
    <div class="header">
      <ul>
        <li>
          <router-link to="/">美团外卖</router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="red"
          >猫眼电影</router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="red"
          >美团酒店</router-link>
        </li>
        <li>
          <router-link to="/">民宿 / 公寓</router-link>
        </li>
        <li>
          <router-link to="/">商家入驻</router-link>
        </li>
        <li>
          <router-link
            to="/"
            class="red"
          >美团公益</router-link>
        </li>
      </ul>
    </div>
    <div class="row">
      <m-slide></m-slide>
      <a
        href="https://bj.meituan.com/xiuxianyule/"
        class="life-pic"
      >
        <img
          src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
          alt=""
        >
      </a>
      <div class="life-login">
        <img
          src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
          alt=""
        >
        <p class="title">{{userName?userName:'Hi！你好'}}</p>
        <template v-if="userName === ''">
          <p class="login btn">
            <router-link :to="{name:'login'}">登录</router-link>
          </p>
          <p class="register btn">
            <router-link :to="{name:'register'}">注册</router-link>
          </p>
        </template>
      </div>
    </div>
    <div class="row">
      <div class="life-hotel">
        <a href="https://hotel.meituan.com/">
          <img
            src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
            alt=""
          >
        </a>
      </div>
      <div class="life-music">
        <a href="https://bj.meituan.com/jiaoyupeixun/?utm_source=MTPCmain-4">
          <img
            src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
            alt=""
          >
        </a>
      </div>
      <div class="life-coop">
        <a href="http://emis.meishi.meituan.com/merchantsSettled">
          <img
            src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
            alt=""
          >
        </a>
      </div>
      <div class="life-download">
        <img
          src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
          alt=""
        >
        <p class="title">美团APP手机版</p>
        <p class="sub"><span class="red">1元起 </span>吃喝玩乐</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import mSlide from './silde.vue';

export default {
  components: {
    mSlide,
  },
  computed: {
    ...mapState(['userName']),
  },
};
</script>
