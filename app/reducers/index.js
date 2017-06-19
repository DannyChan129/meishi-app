//合并所有reducer 导出去
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import {store} from './store';
//合并reducer 会把 以前的state增加一个userInfo 属性
export default combineReducers({
    userInfo,
    store
});