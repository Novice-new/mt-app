<template>
  <div class="goodList">
    <el-row>
      <div class="crumb">
        <router-link :to="{name:'index'}">{{$store.state.position.name}}美团</router-link>
        >
        <router-link :to="{name:'goodList',params:{name:$route.params.name}}">
          {{$store.state.position.name + $route.params.name}}
        </router-link>
      </div>
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <div class="filter-wrapper">
            <category />
          </div>
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5">sugget</el-col>
    </el-row>
  </div>
</template>
<script>
import category from '@/components/goodList/category.vue';
import list from '@/components/goodList/list.vue';

export default {
  components: {
    category,
    list,
  },
};
</script>
<style lang="less">
@import "../assets/css/goodList/index.less";
</style>
