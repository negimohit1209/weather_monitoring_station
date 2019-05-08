import React , {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import { CanvasJS } from '../../assets/canvasjs.react';
import { CanvasJSChart} from '../../assets/canvasjs.react';



export default class Chart extends Component {
    onClick = ()=> {
        var newData = [...this.state.data2];
		newData.shift();
		newData.push(60);
        this.setState({data2: newData})
    }

	render() {
		let options2 = [];
		this.props.data.forEach((data) => {
			options2.push({x: new Date(data.Date), y: data.Humidity})
        });
        console.log(options2)
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: `${this.props.yaxis} daily trends`
			},
			axisY: {
				title: `${this.props.yaxis} Readings`,
				includeZero: false,
				suffix: `${this.props.suffix}`
			},
			axisX: {
				title: "Time",
				valueFormatString: "DD MMM",
				interval: 1
			},
			data: [{
				type: "line",
				xValueFormatString: "DD MMM YY",
				toolTipContent: " <span style=\"color:#6D78AD\">{x}</span><br><b>Humidity:</b> {y} %",
				dataPoints: options2
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            <button onClick={this.onClick}>click</button>
            </div>
       
		);
	}
}   