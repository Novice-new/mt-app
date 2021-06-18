<template>
  <div class="m-geo">
    <div class="position">
      <i class="el-icon-location"></i>
      {{$store.state.position.name}}
      <router-link
        :to="{name:'changeCity'}"
        class="change-city"
      >切换城市</router-link>
      [
      <span
        href="#"
        v-for="city in nearCity"
        :key="city.id"
        @click="handleCilck(city)"
      >{{city.name}}</span>
      ]
    </div>
    <div class="user">
      <template v-if="userName === ''">
        <router-link :to="{name:'login'}">立即登录</router-link>
        <router-link :to="{name:'register'}">注册</router-link>
      </template>
      <template v-else>
        <span>{{userName}}</span>
        <span @click="clearUsername()">退出</span>
      </template>
    </div>
  </div>
</template>
<script>
import tool from '@/api/tools';
import { mapMutations, mapState } from 'vuex';

export default {
  created() {
    tool.getCurPosition().then((res) => {
      this.setPosition(res);
      this.nearCity = res.nearCity;
    });
  },
  computed: {
    ...mapState(['userName']),
  },
  data() {
    return {
      nearCity: [],
    };
  },
  methods: {
    ...mapMutations(['setPosition', 'clearUsername']),
    handleCilck(city) {
      this.setPosition(city);
      if (this.$route.name !== 'idnex') {
        this.$router.push({ name: 'index' });
      }
    },
  },
};
</script>
