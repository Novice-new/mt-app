<template>
  <div class="footer">
    <div class="footer-link">
      <div
        class="footer-column"
        v-for="column in footerData"
        :key="column.id"
      >
        <dl
          v-for=" data in column.data"
          :key="data.title"
        >
          <template v-if="data.children">
            <dt>{{data.title}}</dt>
            <dd
              v-for="item in data.children"
              :key="item.msg"
            >
              <template v-if="item.desc">{{item.desc}}</template>
              <router-link to="/">{{item.msg}}</router-link>
            </dd>
          </template>
          <template v-else>
            <dt>
              <router-link to="/">{{data.title}}</router-link>
            </dt>
          </template>
        </dl>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="left">
        <p>
          ©美团网团购 meituan.com
          <router-link
            to="/"
            style="margin-left:20px"
          >京ICP证070791号</router-link>
          <router-link to="/">京ICP备10211739号-1</router-link>
        </p>
        <p>
          <router-link to="/">广播电视节目制作经营许可证（京）字第03889号</router-link>
        </p>
        <p>
          <router-link to="/">食品经营许可证</router-link>
          <router-link to="/">互联网药品信息服务资格证 (京)-经营性-2017-0014</router-link>
        </p>
        <p>
          <router-link to="/">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</router-link>
        </p>
        <p>
          <router-link to="/">平台EDI许可证</router-link>
        </p>
      </div>
      <div class="right">
        <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002052">
          <img
            src="https://p0.meituan.net/travelcube/d0289dc0a46fc5b15b3363ffa78cf6c719256.png"
            alt=""
          >
          京公网安备 11000002002052号
        </a>
        <div class="cert">
          <a
            class="bus-license"
            href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=11000020190617184241000003572274-SAIC_SHOW_10002020190618102726868&amp;signData=MEQCIMo7nivRikGQc6WsX/jx0IcZ46irhkjszdhhg4kv17uBAiD78duadRu3XX5WyuE+duSrhPmdVUFgr7cN1iV/WSv4uw=="
            title="营业执照"
          >
            <img src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e">
            <p>北京三快科技有限公司</p>
          </a>
          <a
            class="card record"
            href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
            title="备案信息"
          >备案信息</a>
          <a
            class="card trust"
            href="http://t.knet.cn/tsearch/detail?keyword=meituan.com"
            title="可信网站认证"
          >可信网站</a>
          <a
            class="card 12315"
            href="http://www.12315.cn/"
            title="12315消费争议"
          >12315消费争议</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      footerData: [
        {
          id: 1,
          data: [
            {
              title: '用户帮助',
              children: [{ msg: '申请退款' }, { msg: '常见问题' }, { msg: '用户协议' }, { msg: '隐私政策' }, { msg: '反诈骗公告' }, { msg: '消费者权益保障' }],
            }, {
              title: '美团服务',
              children: [{ msg: '美团外卖' }, { msg: '美团酒店' }, { msg: '猫眼电影' }, { msg: '美团配送' }, { msg: '美团云' }, { msg: '大众点评' }, { msg: '美团民宿' }, { msg: '无人配送' }, { msg: '企业用餐、企业差旅' }],
            },
          ],
        },
        {
          id: 2,
          data: [
            {
              title: '商家合作',
              children: [{ msg: '美食商家入驻(非外卖)' }, { msg: '美团外卖开店申请' }, { msg: '美团收银官网' }, { msg: '美团配送合作申请' }, { msg: '美团餐饮学院' }, { msg: '酒店商家入驻' }, { msg: '境内度假商家入驻' }, { msg: '综合商家入驻' }, { msg: '美团民宿房东商家入驻' }, { msg: '商家开票申请' }, { msg: '美团智能收银机' }, { msg: '美团餐饮开放平台' }, { msg: '美团收单' }, { msg: '免费使用美团排队' }, { msg: '快驴进货商家合作' }, { msg: '美团闪购商家入驻' }],
            },
          ],
        },
        {
          id: 3,
          data: [
            {
              title: '合作招募',
              children: [{ msg: '美团外卖合作商招募' }, { msg: '到店餐饮合作商招募' }, { msg: '到店综合业务合作商招募' }, { msg: '美团联盟' }, { msg: '美团收银招募线上分销商' }, { msg: '美团收银合作商招募' }, { msg: '美团收单合作商招募' }, { msg: '美团充电宝合作商招募' }],
            },
            {
              title: '美团规则',
              children: [{ msg: '规则中心' }, { msg: '规则目录' }, { msg: '规则评议院' }],
            },
          ],
        },
        {
          id: 4,
          data: [
            {
              title: '关注美团',
              children: [{ msg: '美团新浪微博' }],
            },
            {
              title: '公司信息',
              children: [{ msg: '关于我们' }, { msg: '投资者关系' }, { msg: '加入我们' }, { msg: '商户诚信公约及管理办法' }, { msg: '保险经纪资质' }],
            },
            {
              title: '廉正举报',
              children: [{ msg: '廉正举报平台' }],
            },
            {
              title: '知识产权',
              children: [{ msg: '知识产权维权平台' }],
            },
          ],
        },
        {
          id: 5,
          data: [
            {
              title: '消费者服务热线',
              children: [{ desc: '外卖消费者：', msg: '10109777' }, { desc: '猫眼消费者：', msg: '10105335' }, { desc: '其他消费者：', msg: '10107888' }],
            },
            {
              title: '商家服务热线',
              children: [{ desc: '外卖&餐饮商家：', msg: '10105557' }, { desc: '休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：', msg: '10100107' }],
            },
            {
              title: '投诉举报专区',
              children: [{ desc: '违法和不良信息举报电话：', msg: '4006018900' }, { desc: '举报邮箱：', msg: 'tousujubao@meituan.com' }, { msg: '网上有害信息举报' }],
            },
            {
              title: '商家自助入驻美团入口',
            }, {
              title: '供应商注册入口',
            },
          ],
        },
      ],
    };
  },
};
</script>
