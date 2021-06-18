<template>
  <div class="hotCity">
    <span>热门城市：</span>
    <div class="container">
      <span
        v-for="city in hotCity"
        :key="city.id"
        @click="handleCilck(city)"
      >{{city.name}}</span>
    </div>
  </div>
</template>
<script>
import tool from '@/api/tools';
import { mapMutations } from 'vuex';

export default {
  created() {
    tool.getHotCity().then((res) => {
      this.hotCity = res;
    });
  },
  data() {
    return {
      hotCity: [],
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
