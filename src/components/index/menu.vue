<template>
  <div class="menu">
    <dl @mouseleave="handleMouseLeave">
      <dt @mouseenter="showDetail = false">全部分类</dt>
      <dd
        v-for="nav in navList"
        :key="nav.id"
        :class="nav.type"
        @mouseenter="handleMouseEnter(nav)"
      >
        <i :class="'iconfont '+'icon-'+ nav.type"></i>
        <span
          v-for="(name,index) in nav.name"
          :key="name"
        >
          <router-link to="/">{{name}}</router-link>
          <template v-if="index !== nav.name.length-1">/</template>
        </span>
        <i class="iconfont icon-arrow"></i>
      </dd>
      <div
        class="category-details"
        v-show="showDetail"
        @mouseenter="showDetail = true"
      >
        <dl
          v-for="detail in curDetails"
          :key="detail.title"
        >
          <dt>
            <span>{{detail.title}}</span>
            <span class="more">
              更多
              <i class="iconfont arrow"></i>
            </span>
          </dt>
          <dd
            v-for="item in detail.items"
            :key="item"
          >
            <router-link to="/">{{item}}</router-link>
          </dd>
        </dl>
      </div>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          type: 'food',
          name: ['美食'],
          items: [
            {
              title: '美食',
              items: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃', '快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤 / 烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾 / 客家菜', '创意菜', '汤 / 粥 / 炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
            },
          ],
        },
        {
          id: 2,
          type: 'takeout',
          name: ['外卖'],
          items: [
            {
              title: '外卖',
              items: ['美团外卖'],
            },
          ],
        },
        {
          id: 3,
          type: 'hotel',
          name: ['酒店'],
          items: [
            {
              title: '酒店星级',
              items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星'],
            },
          ],
        },
        {
          id: 4,
          type: 'homestay',
          name: ['民宿'],
          items: [
            {
              title: '热门城市',
              items: ['上海', '成都', '北京', '重庆', '南京', '杭州', '广州', '西安', '武汉', '厦门', '长沙', '青岛', '深圳', '天津', '苏州'],
            },
            {
              title: '热门房源',
              items: ['复式Loft', '别墅'],
            },
          ],
        },
        {
          id: 5,
          type: 'movie',
          name: ['猫眼电影'],
          items: [
            {
              title: '热映电影',
              items: ['黑白魔女库伊拉', '速度与激情9', '寂静之地2', '悬崖之上', '哆啦A梦：伴我同行2', '我要我们在一起', '阳光姐妹淘', '普罗米亚', '你好世界', '比得兔2：逃跑计划'],
            },
          ],
        },
        {
          id: 6,
          type: 'ticket',
          name: ['机票', '火车票'],
          items: [
            {
              title: '机票',
              items: ['国内机票', '国际/港澳台机票'],
            },
            {
              title: '火车票',
              items: ['火车票'],
            },
          ],
        },
        {
          id: 7,
          type: 'entertainment',
          name: ['休闲娱乐', 'KTV'],
          items: [
            {
              title: '休闲娱乐',
              items: ['足疗按摩', '洗浴/汗蒸', '酒吧', '密室逃脱', '轰趴馆', '茶馆', '私人影院', 'DIY手工坊', '采摘/农家乐', '网吧网咖', '游乐游艺', 'VR', '桌面游戏', '真人CS', '棋牌室', '其他玩乐'],
            },
            {
              title: 'KTV',
              items: ['KTV'],
            },
          ],
        },
        {
          id: 8,
          type: 'service',
          name: ['生活服务'],
          items: [
            {
              title: '生活服务',
              items: ['衣物/皮具洗护', '家政搬家', '运输送水', '充值缴费', '服饰/鞋包养护', '开锁换锁', '居家维修', '管道疏通', '家电维修', '清洗电脑', '维修手机', '维修证件照/肖像摄影', '照片冲印/图文文印', '商务服务/法律服务', '文化传媒机构', '成人用品/情趣用品'],
            },
          ],
        },
        {
          id: 9,
          type: 'beauty',
          name: ['丽人', '美发', '医学美容'],
          items: [
            {
              title: '丽人',
              items: ['美发', '美甲美睫', '美容美体', '医学美容', '瑜伽舞蹈', '瘦身纤体', '韩式定妆', '祛痘', '纹身', '化妆品', '养发'],
            },
          ],
        },
        {
          id: 10,
          type: 'marry',
          name: ['结婚', '婚纱摄影', '婚宴'],
          items: [
            {
              title: '结婚',
              items: ['婚纱摄影', '旅拍', '个性写真', '婚宴', '婚庆公司', '婚纱礼服', '西服定制', '婚戒首饰', '婚车租赁', '司仪主持', '彩妆造型', '婚礼跟拍', '婚礼小礼品', '更多婚礼服务'],
            },
          ],
        },
        {
          id: 11,
          type: 'offspring',
          name: ['亲子', '儿童乐园', '幼教'],
          items: [
            {
              title: '儿童乐园',
              items: ['婴儿游泳', '其他亲子游乐'],
            },
            {
              title: '幼儿教育',
              items: ['早教中心', '少儿英语', '智力开发', '托班/幼儿园', '幼儿教育', '其他幼儿教育'],
            },
            {
              title: '亲子摄影',
              items: ['儿童摄影', '孕妇写真', '上门拍', '其他亲子摄影'],
            },
            {
              title: '孕产护理',
              items: ['月子会所', '产后恢复', '妇幼医院', '孕产用品', '开奶催乳', '月嫂', '亲子购物', '宝宝派对', '亲子服务'],
            },
          ],
        },
        {
          id: 12,
          type: 'fitness',
          name: ['运动健身', '健身中心'],
          items: [
            {
              title: '运动健身',
              items: ['健身中心', '武术场馆', '游泳馆', '羽毛球馆', '溜冰场', '射箭馆', '篮球场', '网球馆', '台球馆', '乒乓球', '足球场', '高尔夫场', '保龄球馆', '体育场馆', '马术场', '壁球馆', '更多运动'],
            },
          ],
        },
        {
          id: 13,
          type: 'decoration',
          name: ['家装', '建材', '家居'],
          items: [
            {
              title: '装修设计',
              items: ['半包装修', '全包装修', '清包装修'],
            },
            {
              title: '装修建材',
              items: ['地板', '瓷砖石材', '橱柜', '灯饰照明', '厨卫洁具', '油漆涂料', '集成吊顶', '墙纸墙艺', '门窗', '木材板材', '家用五金', '电工电料', '楼梯', '管材管件'],
            },
            {
              title: '家具家居',
              items: ['家具', '床上用品/家纺', '家居饰品', '厨具餐具', '智能家居'],
            },
            {
              title: '家装卖场',
              items: ['建材卖场', '家居卖场', '灯饰卖场'],
            },
          ],
        },
        {
          id: 14,
          type: 'study',
          name: ['学习培训', '音乐培训'],
          items: [
            {
              title: '音乐培训',
              items: ['钢琴', '吉他', '小提琴', '古筝', '架子鼓', '声乐', '其他音乐培训'],
            },
            {
              title: '职业技术',
              items: ['美容化妆', '会计', 'IT', '厨艺', '管理培训', '摄影培训', '司法考试', '公务员培训', '其他职业培训'],
            },
            {
              title: '外语培训',
              items: ['英语', '日语', '韩语', '法语', '德语', '汉语', '俄语', '西班牙语', '其他外语'],
            },
            {
              title: '美术培训',
              items: ['绘画', '书法', '其他美术'],
            },
          ],
        },
        {
          id: 15,
          type: 'medical',
          name: ['医疗健康', '宠物', '爱车'],
          items: [
            {
              title: '美食',
              items: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃', '快餐', '日韩料理', '西餐', '聚餐宴请', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅烤鱼', '粤港菜', '中式烧烤 / 烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾 / 客家菜', '创意菜', '汤 / 粥 / 炖菜', '蒙餐', '新疆菜', '其他美食', '京菜鲁菜'],
            },
          ],
        },
        {
          id: 16,
          type: 'bar',
          name: ['酒吧', '密室逃脱'],
          items: [
            {
              title: '医疗健康',
              items: ['医院', '齿科口腔', '体检中心', '药店', '中医', '其他健康服务'],
            },
            {
              title: '爱车',
              items: ['洗车', '租车', '加油站', '维修保养', '驾校', '汽车美容', '陪练', '汽车用品', '停车场', '汽车保险', '4S店/汽车销售', '更多汽车服务', '机油保养', '汽车报价', '二手车', '广告驾校', '交警队', '汽车改装', '汽车配件'],
            },
            {
              title: '宠物',
              items: ['宠物店', '宠物医院'],
            },
          ],
        },
      ],
      showDetail: false,
      curDetails: [],
    };
  },
  methods: {
    handleMouseEnter(nav) {
      this.showDetail = true;
      this.curDetails = nav.items;
    },
    handleMouseLeave() {
      this.showDetail = false;
    },
  },
};
</script>
