import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)

});

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => { //react在开发时可以制造假数据放在public目录下
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log("error")
    })
  }
};

export const getMouseEnter = () => ({
  type: actionTypes.MOUSE_ENTER
});

export const getMouseLeave = () => ({
  type: actionTypes.MOUSE_LEAVE
});

export const changePage = (page) => ({
  type: actionTypes.CHANGE_PAGE,
  page
});