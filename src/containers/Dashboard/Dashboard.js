import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Header from './Header/Header';
import Chart from '../../components/Chart/Chart';
import classes from './Dashboard.module.css';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Typography variant="h3" color="inherit">
        Graph with a realtime increment.
        </Typography>
        <div className={classes.ChartParent}>
        <div className={classes.Chart}>
        <Chart />
        </div> 
      <div className={classes.Chart}>
        <Chart />
      </div> 
        </div>
      </div>
    )
  }
}
