<template>
  <el-container>
    <el-header :height="'197'">
      <my-header></my-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>
<script>
import myFooter from '@/components/footer/index.vue';
import myHeader from '../components/header/index.vue';

export default {
  components: {
    myHeader,
    myFooter,
  },
};
</script>
<style lang="less">
@import "../assets/css/default/index.less";
</style>
