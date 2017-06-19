/**
 * Created by Danny on 2017-06-01.
 */
import * as Types from '../action-types/store'
 //ActionCreate
 export function add(id) {
     return{
         type:Types.ADD_STORE,
         data:id
     }

 }
 export function remove(id) {
    return{
        type:Types.REMOVE_STORE,
        data:id
    }
 }