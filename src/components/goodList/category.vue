<template>
  <div class="category">
    <dl>
      <dt>分类</dt>
      <dt>全部</dt>
      <div class="wrapper">
        <dd
          v-for="classic in classicList"
          :key="classic.title"
        >
          <product-select
            :name="classic.title"
            :list="classic.sub_list"
          ></product-select>
        </dd>
      </div>
    </dl>
    <dl>
      <dt>区域</dt>
      <dt>全部</dt>
      <div class="wrapper">
        <dd
          v-for="area in areaList"
          :key="area.title"
        >
          <product-select
            :name="area.title"
            :list="area.sub_list"
          ></product-select>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import productSelect from './select.vue';

export default {
  components: {
    productSelect,
  },
  data() {
    return {
      classicList: [
        {
          title: '美食',
          type: 'food',
          sub_list: [
            {
              name: '日本菜',
              id: 'Japan',
            },
            {
              name: '饮品店',
              id: 'drink',
            },
            {
              name: '面包甜点',
              id: 'cate',
            },
          ],
        },
        {
          title: '酒店住宿',
          type: 'hotal',
          sub_list: [
            {
              name: '温泉酒店',
              id: 'hot_spring',
            },
            {
              name: '经济型酒店',
              id: 'economy',
            },
            {
              name: '高端酒店',
              id: 'high',
            },
          ],
        },
      ],
      areaList: [
        {
          title: '推荐商圈',
          sub_list: [
            {
              name: '望京',

              id: 120000,
            },

            {
              name: '昌平',

              id: 12222,
            },
          ],
        },
      ],
    };
  },
};
</script>
