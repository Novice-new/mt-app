import axios from '../axios';

export default {
  getHotWords() {
    return axios.get('/api/meituan/header/searchHotWords.json');
  },
  getSearchList() {
    return axios.get('/api/meituan/header/search.json');
  },
  getNavList() {
    return axios.get('/api/meituan/index/nav.json');
  },
  getResultByKeyword() {
    return axios.get('/api/meituan/index/resultsByKeywords.json');
  },
  getCityList() {
    return axios.get('/api/meituan/city/cityList.json');
  },
  getHotCity() {
    return axios.get('/api/meituan/city/hot.json');
  },
  getProvince() {
    return axios.get('/api/meituan/city/province.json');
  },
  getRencentCity() {
    return axios.get('/api/meituan/city/recents.json');
  },
  getProductClassify() {
    return axios.get('/api/meituan/list/classify.json');
  },
  getGoodsList() {
    return axios.get('/api/meituan/list/goodsList.json');
  },
  getCurPosition() {
    return axios.get('/api/meituan/city/getPosition.json');
  },
  login(params) {
    return axios.get('/api/meituan/login', { params });
  },
  register(params) {
    return axios.get('/api/meituan/register', { params });
  },
};
