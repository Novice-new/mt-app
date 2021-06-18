import Vue from 'vue';
import VueRouter from 'vue-router';
import stroe from '../store/index';
import defaultPage from '../layout/default.vue';
import Index from '../page/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'default',
    component: defaultPage,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index,
      },
      {
        path: '/changeCity',
        name: 'changeCity',
        component: () => import('../page/changeCity.vue'),
      },
      {
        path: 's/:name',
        name: 'goodList',
        component: () => import('../page/goodList.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../page/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../page/register.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, go) => {
  if (!stroe.state.userName) {
    if (to.path.includes('login') || to.path.includes('register') || to.name === 'index') {
      go();
    } else {
      go({ name: 'login' });
    }
  }
  go();
});

export default router;
