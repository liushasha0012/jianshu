import axios from 'axios';
import * as actionTypes from './actionTypes';

const getDetailData = (title, content) => ({
  type: actionTypes.CHANGE_DETAIL_DATA,
  title,
  content
});

export const changeDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const data = res.data.data;
      dispatch(getDetailData(data.title, data.content));
    });
  }
};