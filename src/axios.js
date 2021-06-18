import axios from 'axios';
import store from './store/index';

const baseURL = 'http://api.duyiedu.com';
const instance = axios.create({
  baseURL,
});
instance.interceptors.request.use((config) => ({
  ...config,
  params: {
    ...config.params,
    appkey: store.state.appkey,
  },
}));
instance.interceptors.response.use((res) => {
  if (res.data.status === 'fail') {
    return Promise.reject(res.data.msg);
  }
  return res.data.data;
}, (err) => Promise.reject(err));

export default instance;
