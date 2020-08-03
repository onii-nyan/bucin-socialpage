import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux' 
import {Link} from 'react-router-dom'
import dayjs from 'dayjs'

import withStyles from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import Paper  from '@material-ui/core/Paper'
import MuiLink from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip';

import LocationOn from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import CalendarToday from '@material-ui/icons/CalendarToday'
import EditIcon from '@material-ui/icons/Edit'
import KeyboardReturn from '@material-ui/icons/KeyboardReturn'

import {logoutUser, uploadImg} from '../redux/actions/userActions'

const styles = (theme) =>({
    ...theme.profile
  })

class Profile extends Component {
    imgChange = (e) =>{
        const img=e.target.files[0]
        const formData= new formData()
        formData.append('img', img, img.name)
        this.props.uploadImg(formData)
    }

    editPic =()=>{
        const file = document.getElementById('imgInput')
        file.click()
    }

    logout =()=>{
        this.props.logoutUser()
    }
    render() {
        const {classes, 
            handle, createAt, imgURL, bio, website, location,
            loading,
            auth
        } = this.props
        console.log(this.props)

        let profileMarkUp = !loading ? 
            (auth?
                (<Paper className={classes.paper} >
                    <div className={classes.profile} >
                        <div className='img-wrapper' >
                            <img src={imgURL} alt='imgProfile' className='profile-img' />
                            <input type='file' hidden='hiddem' id='imgInput' onChange={this.imgChange} />
                            <Tooltip title="Add" placement="top">
                                <IconButton onClick={this.editPic} className='button'>
                                    <EditIcon color='primary' />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <hr/>
                        <div className='profile-details'>
                            <MuiLink component={Link} to={`/user/${handle}`} color='primary' variant='h5' >
                                @{handle}
                            </MuiLink>
                            <hr/>
                            {bio && (
                                <Typography variant='body2'>
                                    {bio}
                                    <hr/>
                                </Typography>
                            )}
                            {location && (
                                <Fragment>
                                    <LocationOn color='primary'/>
                                    <span>{location}</span>
                                <hr/>
                                </Fragment>
                            )}
                            {website && (
                                <Fragment>
                                    <LinkIcon color='primary'/>
                                    <a href={website} target='_blank' rel="noopener noreferrer"  >
                                        {' '}{website}
                                    </a>
                                    <hr/>
                                </Fragment>
                            )}
                            <CalendarToday color='primary'/>{'  '}
                            <span>Joined on {dayjs(createAt).format('MMM YYYY')}</span>
                        </div>
                        <Tooltip title='Log Out' placeholder='top'>
                            <IconButton onClick={this.logout} >
                                <KeyboardReturn color='primary'/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Paper>
            ):(
                <Paper className={classes.paper} >
                    <Typography variant="body2" align='center' >
                        No Profile Found :((, Please login again
                    </Typography>
                    <div className={classes.buttons} >
                        <Button variant="contained" color="primary" component={Link} to='/login' >
                            Login
                        </Button>
                        <Button variant="contained" color="secondary" component={Link} to='/signup'>
                            Sign Up
                        </Button>
                    </div>
                </Paper>
            )):(
                <p>Loading... :"")))</p>
                )
        return profileMarkUp
    }
}

const mapStateToProps=(state)=>{
    return {
    user: state.user
}}

const mapActionsToProps={logoutUser, uploadImg}

Profile.propTypes = {
    uploadImg: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Profile))