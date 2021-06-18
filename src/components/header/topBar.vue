<template>
  <div class="topBar">
    <el-col :span="12">
      <m-geo></m-geo>
    </el-col>
    <el-col
      :span="12"
      class="clearfix"
    >
      <m-nav></m-nav>
    </el-col>
  </div>
</template>
<script>
import mGeo from './geo.vue';
import mNav from './nav.vue';

export default {
  components: {
    mGeo,
    mNav,
  },
};
</script>
