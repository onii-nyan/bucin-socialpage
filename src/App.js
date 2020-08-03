import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import {Provider} from 'react-redux'
import axios from 'axios'

// material ui
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

// ulti and component
import AuthRoute from './ulti/AuthRoute'
import themeFile from './ulti/theme'
import Navbar from './component/Navbar';

// pages
import home from './pages/home'
import login from './pages/login'
import signup from './pages/signup'

// redux
import  store from './redux/store'
import {SET_AUTH} from './redux/types'
import {logoutUser, getUserData} from './redux/actions/userActions'

const theme = createMuiTheme(themeFile)

const token = localStorage.fbToken
if(token){
  const decodedToken = jwtDecode(token)
  if (decodedToken*1000 < Date.now()){
    store.dispatch(logoutUser())
    window.location.href='/login'
  } else {
    store.dispatch({type:SET_AUTH })
    axios.defaults.headers.common['auth']=token
    store.dispatch(getUserData())
  }
}

class App extends Component {
  render(){
    return (
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <Navbar/>
              <div className='container'>
                <Switch>
                  <Route exact path="/" component={home}/>
                  <AuthRoute exact path="/login" component={login}/>
                  <AuthRoute exact path="/signup" component={signup} />
                </Switch>
              </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
