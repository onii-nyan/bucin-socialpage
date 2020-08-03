import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import Love from '../component/Love'
import Profile from '../component/Profile'

class home extends Component{
    state={
        loves:null
    }
    componentDidMount(){
        axios.get('/loves')
        .then((res)=>{
            this.setState({ 
                loves: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        let recentLoves= this.state.loves ? (
            this.state.loves.map((love)=>
                <p><Love love={love} key={love.loveId}/></p>
            )):(<p>Loading.... :""(((</p>)
        return(
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {recentLoves}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <Profile/>
                </Grid>
            </Grid>
        )
    }
}

export default home