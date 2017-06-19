/**
 * Created by Danny on 2017-05-30.
 */
import *as Types from '../action-types/userInfo'

let initState = {};
export function userInfo(state=initState,action) {
    switch (action.type){
        //将传入的state 更新最新状态
        case Types.UPDATE_CITY:
            return action.data;
        default:
            return state;
    }
}