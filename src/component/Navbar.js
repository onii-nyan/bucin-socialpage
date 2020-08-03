import React, { Component } from 'react'
import Appbar from '@material-ui/core/Appbar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
            <Appbar>
                <Toolbar className='nav-container'>
                    <Button component={Link} to='/login' >Login</Button>
                    <Button component={Link} to='/' >Home</Button>
                    <Button component={Link} to='/signup' >Sign Up</Button>
                </Toolbar>
            </Appbar>
        )
    }
}

export default Navbar