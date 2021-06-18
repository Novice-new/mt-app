<template>
  <div class="visited">
    <span>最近访问：</span>
    <div class="container">
      <span
        v-for="city in visitedCity"
        :key="city.id"
        @click="handleCilck(city)"
      >
        {{city.name}}
      </span>
    </div>
  </div>
</template>
<script>
import tool from '@/api/tools';
import { mapMutations } from 'vuex';

export default {
  created() {
    tool.getRencentCity().then((res) => {
      this.visitedCity = res;
    });
  },
  data() {
    return {
      visitedCity: [],
    };
  },
  methods: {
    ...mapMutations(['setPosition']),
    handleCilck(city) {
      this.setPosition(city);
      this.$router.push({ name: 'index' });
    },
  },
};
</script>
