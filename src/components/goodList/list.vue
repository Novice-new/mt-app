<template>
  <div class="product-list">
    <ul class="list-nav">
      <li
        v-for="nav in navData"
        :key="nav.key"
      >{{nav.name}}</li>
    </ul>
    <el-row>
      <product-card
        v-for="(goods,index) in goodsList"
        :key="index"
        :meta="goods"
      ></product-card>
    </el-row>
  </div>
</template>

<script>
import tool from '@/api/tools';
import productCard from './productCard.vue';

export default {
  components: {
    productCard,
  },
  created() {
    tool.getGoodsList().then((res) => {
      this.goodsList = res;
    });
  },
  data() {
    return {
      navData: [
        {
          key: 's-default',
          name: '智能排序',
          active: true,
        },
        {
          key: 's-price',
          name: '价格最低',
          active: false,
        },
        {
          key: 's-score',
          name: '人气最高',
          active: false,
        },
        {
          key: 's-comment',
          name: '评价最高',
          active: false,
        },
      ],
      goodsList: [],
    };
  },
};
</script>
