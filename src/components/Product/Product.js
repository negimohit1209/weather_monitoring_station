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
        ESP8266 NodeMCU , DHT11 Humdity and Temperature sensor, breadboard, powerbank, and some connnecting wires
        are the hardware tools needed to design the circuit. We've used Arduino IDE for programming the board.
        NodeMCU reads the temperature and humidity values from the sensor and uploads it to ThngSpeak server. We retrieve the data
        from ThingSpeak and plot the graph for visualising the data the getting a quick glance about the comparision of temperatue
        and humidity values over a period of time.
      </Typography>
        </div>
        
        </div>
    </div>
  )
}

Product.propTypes = {

}

export default Product

