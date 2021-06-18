<template>
  <div class="changeCity">
    <el-row>
      <m-province></m-province>
    </el-row>
    <el-row>
      <hot-city></hot-city>
    </el-row>
    <el-row>
      <m-visited></m-visited>
    </el-row>
    <el-row>
      <city-list></city-list>
    </el-row>
  </div>
</template>
<script>
import mProvince from '@/components/changeCity/province.vue';
import hotCity from '@/components/changeCity/hotCity.vue';
import cityList from '@/components/changeCity/cityList.vue';
import mVisited from '../components/changeCity/visited.vue';

export default {
  components: {
    mProvince,
    hotCity,
    cityList,
    mVisited,
  },
};
</script>
<style lang="less">
@import "../assets/css/changeCity/index.less";
</style>
