import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import withSyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import couple from '../img/couple.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

import {connect} from 'react-redux'
import {signupUser} from '../redux/actions/userActions'


const styles = (theme) =>({
    ...theme.spreadThis
  })

class signup extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            handle:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps.UI.errors){
            this.setState({errors: nextProps.UI.errors})
        }
    }
    handSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            loading: true
        })
        const newUserData={
            email: this.state.email,
            password: this.state.password,
            handle: this.state.handle
        }
        this.props.signupUser(newUserData, this.props.history)
    }
    handChange =(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        const {classes, UI: {loading}} = this.props
        const {errors}= this.state
        return(
            <Grid container className={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variants='h3' className={classes.pageTitle} >Sign Up</Typography>
                    <img src={couple} alt='loveydovey' className={classes.image}/>
                    <form noValidate onSubmit={this.handSubmit}>
                        <TextField id='handle' name='handle' type='text' label='Handle' 
                            className={classes.textField} value={this.state.handle} 
                            onChange={this.handChange} fullWidth helperText={errors.handle}
                            error={errors.handle? true:false}
                        />
                        <TextField id='email' name='email' type='email' label='Email' 
                            className={classes.textField} value={this.state.email} 
                            onChange={this.handChange} fullWidth helperText={errors.email}
                            error={errors.email? true:false}
                        />
                        <TextField id='password' name='password' type='password' label='Password' 
                            className={classes.textField} value={this.state.password} 
                            onChange={this.handChange} fullWidth helperText={errors.password}
                            error={errors.password? true:false}
                        />
                        {errors.general&& (
                            <Typography variant="body2" className={classes.ErrStyle}>{errors.general}</Typography>
                        )}
                        <Button type='submit' variant='contained' color='primary' 
                        className={classes.button} disabled={loading} >Sign Up
                            {loading && (<CircularProgress className={classes.progress}/>)} 
                        </Button>
                        <br/>
                        <small>Have an account ? go to <Link to='/login'>Login</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

signup.propTypes={
    classes:PropTypes.object.isRequired,
    signupUser: PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    UI:PropTypes.object.isRequired,
}

const mapStateToProps = (state)=>({
    user:state.user,
    UI: state.UI
})

export default connect(mapStateToProps, {signupUser})(withSyles(styles)(signup))