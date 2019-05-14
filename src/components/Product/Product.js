import React from 'react'
import circuit from '../../assets/images/circuit.jpg';
import Typography from '@material-ui/core/Typography';
import classes from './Product.module.css'
function Product(props) {
  return (
    <div className={classes.parent}>
        <div className={classes.image}>
            <img src={circuit} alt="circuit diagram" width="90%" height="90%"/>
        </div>
        <div className={classes.text}>
        <div className={classes.title}>
        <Typography variant="h3" gutterBottom>
            Circuit diagram
        </Typography>
        </div>
        <div className={classes.paragraph}>
        <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
        </div>
        
        </div>
    </div>
  )
}

Product.propTypes = {

}

export default Product

