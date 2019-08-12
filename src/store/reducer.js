//import {combineReducers} from 'redux'; //用于把小的reducer合并成大的reducer
import { combineReducers } from 'redux-immutable'; //用于把原始的state转换成immutable对象
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
//使用redux-immutable

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
});

export default reducer;