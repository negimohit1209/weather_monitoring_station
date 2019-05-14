import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classes from './Team.module.css';
import TeamCard from '../TeamCards/TeamCards';
import mohit from '../../assets/images/mohit.jpg';
import naman from '../../assets/images/naman.jpg';
import danish from '../../assets/images/danish.jpg';
function Team(props) {
  return (
    <div className={classes.main}>
    <br/>
      <div className={classes.title}>
      <Typography variant="h2" gutterBottom>
        Meet the Team
    </Typography>
      </div>
      <br/>
      <div className={classes.team}>
    
  <div className={classes.parent}>
  <div className={classes.child}>
  <TeamCard img={mohit} name="Mohit Negi" className={classes.singleCard}/>
  </div>
<div className={classes.child}>
<TeamCard img={danish} name="Mohd. Danish Kaleem" className={classes.singleCard}/>
</div>
    <div className={classes.child}>
    <TeamCard img={naman} name="Naman Kumar Mehta" className={classes.singleCard}/>
    </div>
    
    
    </div>
      </div>
    </div>
  )
}


export default Team

