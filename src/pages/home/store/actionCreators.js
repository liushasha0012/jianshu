import axios from 'axios';
import {actionTypes} from './index';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recUrl: result.recUrl
});

const loadMoreList = (list, nextPage) => ({
  type: actionTypes.LOAD_MORE_LIST,
  list: fromJS(list), //将普通数组转换成immutable数组
  nextPage
});

export const getHomeData = () => {
  return (dispatch) => {              //因为redux-thunk使得，action可以返回一个函数，返回的函数接受一个dispatch参数
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(loadMoreList(result, page + 1));
    })
  }
};

export const getShowTips = () => ({
  type: actionTypes.GET_SHOW_TIPS
});

export const getHideTips = () => ({
  type: actionTypes.GET_HIDE_TIPS
});

export const showScrollTops = (show) => ({
  type: actionTypes.SHOW_SCROLL_TOP,
  show
});