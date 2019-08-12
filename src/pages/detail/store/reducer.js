import { fromJS } from 'immutable';
import { actionTypes } from './index';

const defaultState = fromJS({
    title: '',
    content: ''
});

const detailData = (state, action) => {
    return state.merge({
        title: action.title,
        content: action.content
    });
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_DETAIL_DATA:
            return detailData(state, action);
        default:
            return state;
    }
};