import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable'; //immutable库提供了一个fromJS方法，用来把一个对象转换成immutable对象
// 借用immutable库可以避免不小心改变state的数据
const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalPage: 1,
  mouseIn: false
}); //生成了一个immutable对象

// export default (state = defaultState, action) => {
//   if (action.type === actionTypes.SEARCH_FOCUS) {
//     //return //{
//     //focused: true
//     //}//要返回一个新对象
//     //使用immutable后要使用set方法
//     return state.set('focused', true); //set方法是用来生成一个新的immutable对象，而不是改变原来的对象
//   }
//   if (action.type === actionTypes.SEARCH_BLUR) {
//     // return {
//     //   focused: false
//     // }
//     return state.set('focused', false);
//   }
//   if (action.type === actionTypes.CHANGE_LIST) {
//       return state.set('list', action.data);
//   }
//   return state;
// }

const changeList = (state, action) => {
  return state.merge({
    list: action.data,
    totalPage: action.totalPage
  });
};


//使用switch语句优化代码
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return changeList(state, action);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}