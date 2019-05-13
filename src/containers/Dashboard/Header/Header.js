import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
export default class Header extends Component {
    state = {
        time: moment()
    }; 
  render() {
    return (
        <div>
        
        <Typography variant="h3" color="inherit" key="1">
            IIEST Shibpur, West Bengal
        </Typography>
        <Typography variant="h5" color="inherit" key="2">
            Time: {moment(this.state.time).format("hh:mm:ss a")}
        </Typography>
        <Typography variant="h5" color="inherit" key="3">
            Date: {moment(this.state.time).format("MMM D, YYYY")}
        </Typography>
        <Typography variant="h5" color="inherit" key="4">
            Temperature: 34° C
        </Typography>
        <Typography variant="h5" color="inherit" key="5">
            Humidity: 73%
        </Typography>
        </div>
    )
  }
}
