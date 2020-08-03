import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import relativeTime from 'dayjs/plugin/relativeTime' 
import dayjs from 'dayjs';


import withStyles from '@material-ui/core/styles/withStyles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = (theme) =>({
    ...theme.spreadThis
  })

class Love extends Component {
    render(){
        dayjs.extend(relativeTime)
        const {classes, love:{body, userName, createAt, userImg, loveId, likeCount, commentCount}} = this.props
        return(
            <Card key={loveId} className={classes.card}>
                <CardHeader avatar={<Avatar src={userImg}></Avatar>} title={userName} component={Link} to={`/users/${userName}`}/>
                <CardContent className={classes.content}>
                    <Typography variant='body' color='primary'>{body}</Typography>
                    <Typography variant='like' color='textSecondary'>{likeCount}</Typography>
                    <Typography variant='comment' color='textSecondary'>{commentCount}</Typography>
                    <Typography variant='body2' color='textSecondary'>{dayjs(createAt).fromNow()}</Typography>
                </CardContent>
            </Card>
        )  
    }
}

export default withStyles(styles)(Love)