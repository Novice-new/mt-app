<template>
  <div class="slide">
    <el-carousel
      height="240px"
      :interval="4000"
    >
      <el-carousel-item
        v-for="item in slideData"
        :key="item.id"
      >
        <a href="item.href">
          <img
            :src="item.img"
            alt=""
          >
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slideData: [
        {
          img: 'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
          href: 'http://hotel.meituan.com/',
          id: 1,
        }, {
          img: 'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
          href: 'https://bj.meituan.com/meishi/',
          id: 2,
        }, {
          img: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
          href: 'http://waimai.meituan.com/',
          id: 3,
        }, {
          img: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
          href: 'http://maoyan.com/',
          id: 4,
        }, {
          img: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
          href: 'https://paidui.meituan.com/?activity_code=169_00038142',
          id: 5,
        },
      ],
    };
  },
};
</script>
