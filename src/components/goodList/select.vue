<template>
  <div class="product-select">
    <div class="tag">
      <div class="content">
        {{name}}
        <i class="el-icon-caret-bottom"></i>
        <div class="down-list-wrapper">
          <span class="title">{{name}}</span>
          <span
            class="item"
            v-for="(item,index) in list"
            :key="index"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'name',
    'list',
  ],
};
</script>
