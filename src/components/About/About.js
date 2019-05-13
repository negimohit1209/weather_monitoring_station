import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import classes from './About.module.css'
function About(props) {
  return (
    <div className={classes.parent}>
    <div className={classes.title}>
    <Typography component="h2" variant="display2" gutterBottom>
      Overview
    </Typography>
    </div>
    <br/>
    <div className={classes.textBody}>
    <Typography variant="body2" gutterBottom>
    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
  </Typography>
    </div>
    <br/>
    </div>
  )
}


export default About

