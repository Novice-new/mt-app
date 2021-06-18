<template>
  <div class="province">
    <span>按省份选择：</span>
    <m-select
      :res="provinceData"
      :type="'province'"
      :value='curProvince'
      :change='changeProvince'
      :isShow='showProvince'
      :toggleShow='toggleShowProvince'
    ></m-select>
    <m-select
      :res="cityData"
      :type="'city'"
      :value='curCity'
      :change='changeCity'
      :isShow='showCity'
      :toggleShow='toggleShowCity'
    ></m-select>
    <div class="search">
      <label for="">直接搜索：</label>
      <input
        v-model="inputVal"
        type="text"
        placeholder="请输入城市中文或拼音"
        @focus="handleFocus"
        @blur="handleBlur"
      >
      <div
        class="suggest-city-wrapper"
        v-show="showSearch"
      >
        <div class="suggest-city-list">
          <span v-if="suggestCities.length === 0">未找到匹配城市</span>
          <span
            v-else
            v-for="item in suggestCities"
            :key="item.id"
            @click="handleClick(item)"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tool from '@/api/tools';
import { mapMutations } from 'vuex';
import mSelect from './select.vue';

export default {
  components: {
    mSelect,
  },
  data() {
    return {
      inputVal: '',
      cityList: [],
      addressData: [],
      curProvince: '',
      curCity: '',
      showProvince: false,
      showCity: false,
      showSearch: false,
      hotCity: [],
    };
  },
  created() {
    tool.getProvince().then((res) => {
      this.addressData = res;
      res.forEach((item) => {
        this.cityList = this.cityList.concat(item.cityInfoList);
      });
    });
  },
  methods: {
    ...mapMutations(['setPosition']),
    changeProvince(newVal) {
      this.curProvince = newVal.name;
    },
    changeCity(newVal) {
      this.curCity = newVal.name;
      this.setPosition(newVal);
      this.$router.push({ name: 'index' });
    },
    toggleShowProvince(newVal) {
      this.showProvince = newVal;
    },
    toggleShowCity(newVal) {
      this.showCity = newVal;
    },
    handleFocus() {
      this.showSearch = true;
    },
    handleBlur() {
      setTimeout(() => {
        this.showSearch = false;
      }, 100);
    },
    handleClick(item) {
      this.setPosition(item);
      this.$router.push({ name: 'index' });
    },
  },
  computed: {
    provinceData() {
      const result = this.addressData.map((item) => ({
        name: item.provinceName,
        code: item.provinceCode,
      }));
      return result;
    },
    cityData() {
      if (!this.curProvince) return [];
      const result = this.addressData.find((item) => item.provinceName === this.curProvince);
      if (!result) {
        return [];
      }
      return result.cityInfoList;
    },
    suggestCities() {
      if (!this.inputVal) return [];
      return this.cityList
        .filter((city) => city.pinyin.startsWith(this.inputVal)
          || city.name.startsWith(this.inputVal));
    },
  },
};
</script>
