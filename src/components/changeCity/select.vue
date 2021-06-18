<template>
  <div
    class="select-wrapper"
    :class="[{disabled:selectData.length===0},type]"
    @click="showList"
  >
    <span>{{value?value:selectType}}</span>
    <i class="el-icon-caret-bottom"></i>
    <div
      class="select-list"
      v-show="isShow"
    >
      <div class="title">{{selectType}}</div>
      <div class="choose-wrapper">
        <div
          class="col"
          v-for="(cityCol,index) in selectData"
          :key="index"
        >
          <span
            v-for="city in cityCol"
            :key="city.name"
            :class="{active:value === city.name}"
            @click="choose($event,city)"
          >{{city.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['res', 'type', 'change', 'value', 'isShow', 'toggleShow'],
  data() {
    return {
      size: 12,
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      const { className } = e.target;
      if (!className.includes(this.type)) {
        this.toggleShow(false);
      }
    });
  },
  computed: {
    selectType() {
      return this.type === 'province' ? '省份' : '城市';
    },
    selectData() {
      if (!this.res) return [];
      const result = [];
      const len = this.res.length;
      for (let i = 0; i < Math.ceil(len / this.size); i += 1) {
        const start = i * this.size;
        const end = start + this.size;
        result.push(this.res.slice(start, end));
      }
      return result;
    },
  },
  methods: {
    showList() {
      if (this.selectData.length === 0) return;
      this.toggleShow(true);
    },
    choose(e, item) {
      e.stopPropagation();
      this.change(item);
      this.toggleShow(false);
    },
  },
};
</script>
