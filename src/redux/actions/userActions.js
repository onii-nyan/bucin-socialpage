import {SET_USER,SET_ERRORS, CLEAR_ERRORS, LOADING_UI, SET_UNAUTH, LOADING_USER} from '../types'
import axios from 'axios'

export const loginUser = (userData, history) => (dispatch) =>{
    dispatch({type: LOADING_UI})
    axios.post('/login', userData)
        .then((res)=>{
            setAuthHeader(res.data.token)
            dispatch(getUserData()) 
            dispatch({type: CLEAR_ERRORS})
            history.push('/')
        })
        .catch((err)=>{
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}
export const signupUser = (newUserData, history) => (dispatch) =>{
    dispatch({type: LOADING_UI})
    axios.post('/signup', newUserData)
        .then((res)=>{
            setAuthHeader(res.data.token)
            dispatch(getUserData()) 
            dispatch({type: CLEAR_ERRORS})
            history.push('/')
        })
        .catch((err)=>{
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const logoutUser =()=>(dispatch)=>{
    localStorage.removeItem('fbToken')
    delete axios.defaults.headers.common['auth']
    dispatch({ype:SET_UNAUTH})
} 

export const getUserData = () => (dispatch)=>{
    dispatch({type: LOADING_USER})
    axios.get('/user')
        .then((res)=>{
            dispatch({
                type: SET_USER,
                payload: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
}

export const uploadImg = (formData) => (dispatch)=>{
    dispatch({type: LOADING_USER})
    axios.post('/user/img')
    .then(()=>{
        dispatch(getUserData())
    })
    .catch(err=>{
        console.log(err)
    })
}
// functions for auth

const setAuthHeader =(token)=>{
    const fbToken = `Bearer ${token}`
    localStorage.setItem('fbToken', fbToken)
    axios.defaults.headers.common['auth'] = fbToken        
}