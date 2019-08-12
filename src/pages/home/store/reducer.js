import {fromJS} from 'immutable';
import {actionTypes} from './index';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recUrl: [],
  articlePage: 1,
  showTips: false,
  showScroll: false
});
const changeHomeDate = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recUrl: fromJS(action.recUrl)
  });
};
const loadMoreList = (state, action) => {
  return state.merge({
    articleList: state.get('articleList').concat(action.list),
    articlePage: action.nextPage
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return changeHomeDate(state, action);
    case actionTypes.LOAD_MORE_LIST:
      return loadMoreList(state, action);
    case actionTypes.GET_SHOW_TIPS:
      return state.set('showTips', true);
    case actionTypes.GET_HIDE_TIPS:
      return state.set('showTips', false);
    case actionTypes.SHOW_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}