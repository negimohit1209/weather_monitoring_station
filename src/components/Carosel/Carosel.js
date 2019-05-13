import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classes from './Carosel.module.css';

function Carosel(props) {
  return (
    <div className={classes.container}>
      <img 
        src="https://www.iiests.ac.in/images/slideshows/homepage3/5.jpg" 
        alt="Weather Monitoring System"
        width="100%"
        className = {classes.image}
        />
        <div className={classes.centered}>
            <Typography variant="h3" gutterBottom>
            Weather Monitoring System
        </Typography>
        </div>
        <div className={classes.belowCenter}>
        <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>
        </div>
        <div className={classes.button}>
        <Button variant="contained" color="primary" onClick={props.clicked}>
        get started
      </Button>
        </div>
    </div>
  )
}

export default Carosel;

