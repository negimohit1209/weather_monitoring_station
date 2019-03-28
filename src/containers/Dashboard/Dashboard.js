import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Header from './Header/Header';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Typography variant="h3" color="inherit">
        Graph with a realtime increment.
        </Typography> 
        <Typography variant="h3" color="inherit">
        
        </Typography> 
      </div>
    )
  }
}
