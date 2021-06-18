<template>
  <div class="index-page">
    <el-row>
      <m-menu></m-menu>
      <m-life></m-life>
    </el-row>
    <el-row>
      <m-container :navData="iStyle"></m-container>
    </el-row>
    <el-row>
      <m-container :navData="recomment"></m-container>
    </el-row>
  </div>
</template>
<script>
import mMenu from '@/components/index/menu.vue';
import mLife from '@/components/index/life.vue';
import mContainer from '../components/index/container.vue';

export default {
  data() {
    return {
      iStyle: {
        class: 'istyle',
        title: '有格调',
        list: [{
          text: '全部',
          tab: 'all',
        }, {
          text: '约会聚餐',
          tab: 'food',
        }, {
          text: '丽人SPA',
          tab: 'spa',
        }, {
          text: '电影演出',
          tab: 'movie',
        }, {
          text: '品质出游',
          tab: 'travel',
        }],
      },
      recomment: {
        class: 'sale',
        title: '很优惠',
        list: [{
          text: '全部',
          tab: 'all',
        }, {
          text: '美食',
          tab: 'food',
        }, {
          text: '休闲',
          tab: 'xiuxian',
        }],
      },
    };
  },
  components: {
    mMenu,
    mLife,
    mContainer,
  },
};
</script>
<style lang="less">
@import "../assets/css/index/index.less";
</style>
