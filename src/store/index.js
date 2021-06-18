import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appkey: 'nietao_1602507079927',
    position: {},
    userName: '',
  },
  mutations: {
    setPosition(state, val) {
      state.position = val;
    },
    setUserName(state, val) {
      state.userName = val;
    },
    clearUsername(state) {
      state.userName = '';
    },
  },
  actions: {
  },
  modules: {
  },
});
