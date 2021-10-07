import {ADD_ITEM , DELETE_ITEM} from './actionTypes'
import initialState from './initialState'
import _ from 'lodash'



const cartReducer = (state = initialState,action) =>{
    switch(action.type){
        case ADD_ITEM:
            state[action.id - 1].amount++;
            return[...state]
            
        case DELETE_ITEM:
            state[action.id - 1].amount--;
            return[...state]
        default:
            return state
    }
}

export default cartReducer