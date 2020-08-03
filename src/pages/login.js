import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import withSyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import couple from '../img/couple.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

import {connect} from 'react-redux'
import {loginUser} from '../redux/actions/userActions'

const styles = (theme) =>({
    ...theme.spreadThis
  })

class login extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
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
        const userData={
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData, this.props.history)
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
                    <Typography variants='h3' className={classes.pageTitle} >Login</Typography>
                    <img src={couple} alt='loveydovey' className={classes.image}/>
                    <form noValidate onSubmit={this.handSubmit}>
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
                        className={classes.button} disabled={loading} >Login 
                            {loading && (<CircularProgress className={classes.progress}/>)} 
                        </Button>
                        <br/>
                        <small>Don't have an account ? go to <Link to='/signup'>Sign Up</Link></small>
                    </form>
                </Grid>
                <Grid item sm/>
            </Grid>
        )
    }
}

login.propTypes={
    classes:PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user:PropTypes.object.isRequired,
    UI:PropTypes.object.isRequired,
}

const mapStateToProps = (state)=>({
    user:state.user,
    UI: state.UI
})

export default connect(mapStateToProps, {loginUser})(withSyles(styles)(login))