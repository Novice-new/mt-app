<template>
  <div class="m-container">
    <dl
      :class="navData.class"
      @mouseover="handleOver"
    >
      <dt>{{navData.title}}</dt>
      <dd
        v-for="item in navData.list"
        :key="item.text"
        :class="{active:item.tab === type}"
        :data-type="item.tab"
      >
        {{item.text}}
      </dd>
    </dl>
    <div class="m-body">
      <ul>
        <li
          v-for="(item,index) in results[type]"
          :key="index"
        >
          <el-card :body-style="{ padding: '0px' }">
            <div class="card-header">
              <img
                :src="item.image"
                class="image"
              >
              <img
                src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
                class="logo"
              >
            </div>
            <div class="card-body">
              <p class="title">{{item.title}}</p>
              <p class="sub">{{item.subTitle}}</p>
            </div>
            <div class="card-footer">
              <p class="price"><span class="price-icon">￥</span>{{item.price}}</p>
              <p class="address">{{item.address}}</p>
            </div>
          </el-card>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import tool from '@/api/tools';

export default {
  props: {
    navData: {
      type: Object,
      required: true,
    },
  },
  created() {
    tool.getResultByKeyword().then((res) => {
      this.results = res;
    });
  },
  data() {
    return {
      type: 'all',
      results: {},
    };
  },
  methods: {
    handleOver(e) {
      const { target } = e;
      if (target.nodeName === 'DD') {
        this.type = target.getAttribute('data-type');
      }
    },
  },
};
</script>
