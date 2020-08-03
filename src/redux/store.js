import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducer/userReducer'
import uiReducer from './reducer/uiReducer'
import dataReducer from './reducer/dataReducer'

const inState={}

const middleware =[thunk]

const reducers = combineReducers({
    user:userReducer,
    data:dataReducer,
    UI : uiReducer,
})

const store =createStore( reducers, inState, compose(
    applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store