import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import * as moment from 'moment';
import classes from './Header.module.css';
export default class Header extends Component {
    state = {
        time: moment()
    }; 
  render() {
    return (
        <div className={classes.container}>
        <div className={classes.child1}>
        <Typography variant="h5" color="inherit" key="2" id={classes.typo1}>
            Time: {moment(this.state.time).format("hh:mm a")}
        </Typography>
        <Typography variant="h5" color="inherit" key="3" id={classes.typo2}>
            Date: {moment(this.state.time).format("MMM D, YYYY")}
        </Typography>
        </div>
        <div className={classes.child2}>
        <Typography variant="h5" color="inherit" key="4" id={classes.typo3}>
            Temperature: {this.props.temp}° C
        </Typography>
        <Typography variant="h5" color="inherit" key="5" id={classes.typo4}>
            Humidity: {this.props.humi} %
        </Typography>
        </div>
        
        </div>
    )
  }
}
