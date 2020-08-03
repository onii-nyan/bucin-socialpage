import {SET_USER, LOADING_USER, SET_AUTH, SET_UNAUTH} from '../types'

const inState ={
    auth: false,
    credentils:{},
    likes:[],
    notifications:[],
    loading: false
}

export default function(state= inState, action){
    switch(action.type){
        case SET_AUTH:
            return{
                ...state,
                auth: true
            }
        case SET_UNAUTH:
            return inState
        case SET_USER:
            return{
                auth: true,
                loading: false,
                ...action.payload
            }
        case LOADING_USER:
            return{
                loading: true
            }
        default:
            return state
    }
}