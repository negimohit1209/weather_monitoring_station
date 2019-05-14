import React from 'react'
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
    Weather generally refers to
day-to-day temperature and precipitation activity, whereas climate is the
term for the average atmospheric conditions over longer periods of time.
When used without qualification, “weather”, is understood to mean the
weather of earth. Monitoring the weather conditions manually is difficult.
The present work is to develop an automated system which monitors the
weather condition. The weather condition is driven by air pressure
(temperature and moisture) differences between one place and another. These
pressure and temperature differences can occur due to the sun angle at any
particular spot. Through this system we can automatically collect the
information about humidity and temperature. The details are stored in a
database and according to current and previous data we can produce the
results in graphical manner in the system. The objective of this paper is to
formulate the weather and be able to visualize the weather without human
error.
  </Typography>
    </div>
    <br/>
    </div>
  )
}


export default About

