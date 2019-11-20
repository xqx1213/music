import {CHANGE_INPUT,ADD_ITEM,DEL_ITEM,GET_DATA} from './actionTypes';

export const changeInputAction=(value)=>{
    return {
        type:CHANGE_INPUT,
        value
    }    
}

export const addItemAction=()=>({
    type:ADD_ITEM
})

export const delItemAction=(index)=>({
    type:DEL_ITEM,
    index
})

export const getDataAction=(data)=>({
    type:GET_DATA,
    data
})