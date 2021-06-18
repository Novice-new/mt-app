<template>
  <div class="cityList">
    <div class="list-header">
      <span>按拼音首字母选择：</span>
      <div class="alphabet-container">
        <a
          :href="'#'+ alphabet"
          v-for="alphabet in alphabetArr"
          :key="alphabet"
        >{{alphabet}}</a>
      </div>
    </div>
    <div class="alphabet-city-wrapper">
      <div
        class="city-area"
        v-for="cityList in alphabetCity"
        :key="cityList.alphabet"
        :id="cityList.alphabet"
        v-show="cityList.cities.length !== 0"
      >
        <span class="initial">{{cityList.alphabet}}</span>
        <div class="cities">
          <span
            v-for="city in cityList.cities"
            :key="city.id"
            @click="handleClick(city)"
          >{{city.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tool from '@/api/tools';
import { mapMutations } from 'vuex';

export default {
  created() {
    tool.getProvince().then((res) => {
      this.addressData = res;
      res.forEach((item) => {
        this.cityList = this.cityList.concat(item.cityInfoList);
      });
    });
  },
  data() {
    return {
      cityList: [],
      alphabetArr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
    };
  },
  computed: {
    alphabetCity() {
      const result = this.alphabetArr.map((alphabet) => ({
        alphabet,
        cities: [],
      }));
      this.cityList.forEach((city) => {
        const index = this.alphabetArr.findIndex((item) => item === city.firstChar);
        result[index].cities.push(city);
      });
      return result;
    },
  },
  methods: {
    ...mapMutations(['setPosition']),
    handleClick(city) {
      this.setPosition(city);
      this.$router.push({ name: 'index' });
    },
  },
};
</script>
