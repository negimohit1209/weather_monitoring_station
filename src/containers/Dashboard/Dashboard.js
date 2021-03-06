import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Header from './Header/Header';
import Chart from '../../components/Chart/Chart';
import ChartMaxMin from '../../components/ChartMaxMIn/ChartMaxMin';
import ChartHumidity from '../../components/ChartHumidity/ChartHumidity';
import classes from './Dashboard.module.css';
import SimpleCard from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';
import {connect} from 'react-redux';
import * as Actions from '../../Store/action/index';
import Button from '@material-ui/core/Button';

class Dashboard extends Component {
  state = {
    tempSelection: "RT",
    humiditySelection: "RT"
  }
  componentWillMount () {
    this.props.onInitDailyWeather();
    this.props.onInitWeather();
    
  }
  tClicked = (val) =>{
    this.setState({
      tempSelection: val
    })
  }
  hClicked = (val) => {
    this.setState({
      humiditySelection: val
    })
  }
  onclick = () => {
    if(this.props.location.pathname === '/')
      this.props.history.push('/dashboard');
    else
      this.props.history.push('/');
    }
  render() {
    let tempDataRaw = this.props.temperature
    let tempData = [];
    tempDataRaw.forEach((data) => {
      tempData.push(data.value);
    })
    let humidityDataRaw = this.props.humidity
    let humidityData = [];
    humidityDataRaw.forEach((data) => {
      if(data.value <= 50){
        humidityData.push(100 - data.value);
      }else{
        humidityData.push(data.value);
      }
      
    })
    let humidityDailyRaw = this.props.temperatureDaily
    let humidityDailyData = [];
    humidityDailyRaw.forEach(data => {
      humidityDailyData.push(data.Humidity)
    })
    let tempSelector;
    if(this.state.tempSelection === "RT"){
      tempSelector = (<Chart data={tempData} yaxis="Temperature" suffix="° C"/>)
    }
    if(this.state.tempSelection === "D"){
        tempSelector =  (<ChartMaxMin data={this.props.temperatureDaily}/>)
    }
    let humiditySelector;
    if(this.state.humiditySelection === "RT"){
      humiditySelector = (<Chart data={humidityData} yaxis="Humidity" suffix="%"/>)
    }
    if(this.state.humiditySelection === "D"){
        humiditySelector =  (<ChartHumidity data={this.props.temperatureDaily} yaxis="Humidity" suffix="%"/>)
    }
    return (
      <div>
      <Navbar clicked={this.onclick} path={this.props.location.pathname}/>
        <Header temp={this.props.currentTemp} humi={this.props.currentHumidity}/>
        <Typography variant="h3" color="inherit">
        </Typography>
        <div className={classes.ChartParent}>
        <div className={classes.Chart}>
        <SimpleCard>
        <Button variant="outlined" onClick={() => this.tClicked('RT')}>
          REAL-TIME
          </Button>
          <Button variant="outlined" color="primary" onClick={() => this.tClicked('D')}>
          DAILY
          </Button>
          {tempSelector}
        </SimpleCard>
        </div> 
      <div className={classes.Chart}>
      <SimpleCard>
      <Button variant="outlined" onClick={() => this.hClicked('RT')}>
          REAL-TIME
          </Button>
          <Button variant="outlined" color="primary" onClick={() => this.hClicked('D')}>
          DAILY
          </Button>
          {humiditySelector}
      </SimpleCard>
      </div> 
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    temperature: state.temperature,
    humidity: state.humidity,
    temperatureDaily: state.temperatureDaily,
    currentTemp: state.currentTemp,
    currentHumidity: state.currentHumidity
  }
}
const mapDispatchToProps = dispatch => {
  return{
    onInitWeather: () => dispatch(Actions.initWeather()),
    onInitDailyWeather: () => dispatch(Actions.initDailyWeather())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);