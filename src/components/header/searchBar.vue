<template>
  <div class="searchBar clearfix">
    <div class="logo">
      <img
        src="https://s0.meituan.net/bs/fe-web-meituan/10afbf1/img/logo.png"
        alt=""
      >
    </div>
    <div class="search-area">
      <div class="search-box">
        <el-input
          placeholder="搜索商家或地点"
          v-model="keywords"
          @focus="isFocus = true"
          @blur="handleBlur"
          @input="handleInput"
        ></el-input>
        <el-button
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </div>
      <div
        class="hot-search"
        v-show="isFocus && !keywords"
      >
        <dt>热词搜索</dt>
        <dd
          v-for="word in hotWords"
          :key="word"
        >
          <router-link :to="{name:'goodList',params:{name:word}}">{{word}}</router-link>
        </dd>
      </div>
      <div
        class="search-list"
        v-show="keywords !== ''"
      >
        <dl>
          <dd
            v-for="(item,index) in searchList"
            :key="item + index + '~'"
          >
            <router-link :to="{name:'goodList',params:{name:item}}">{{item}}</router-link>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import tool from '@/api/tools';

export default {
  data() {
    return {
      keywords: '',
      isFocus: false,
      hotWords: [],
      searchList: [],
    };
  },
  methods: {
    handleBlur() {
      setTimeout(() => {
        this.isFocus = false;
      }, 100);
    },
    handleInput() {
      tool.getSearchList().then((res) => {
        this.searchList = res.list.filter((word) => word.includes(this.keywords));
      });
    },
    search() {
      if (this.keywords) {
        this.$router.push({ name: 'goodList', params: { name: this.keywords } });
      }
    },
  },
  watch: {
    '$route.params.name': function () {
      this.keywords = this.$route.params.name;
      this.isFocus = false;
    },
  },
  created() {
    if (this.$route.params.name) {
      this.keywords = this.$route.params.name;
    }
    tool.getHotWords().then((res) => {
      this.hotWords = res;
    });
  },
};
</script>
