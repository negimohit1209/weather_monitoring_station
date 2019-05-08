import React , {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import { CanvasJS } from '../../assets/canvasjs.react';
import { CanvasJSChart} from '../../assets/canvasjs.react';

export default class ChartMaxMin extends Component {
	render() {
		let data = this.props.data;
		console.log(data);
		let newdata = [];
		data.forEach(data => {
			newdata.push({
				x: new Date(data.Date),
				y: [data["Min temp"], data["Max Temp"]]
			})
		})
		console.log(newdata);
		const options = {
			theme: "light2",
			animationEnabled: true,
			exportEnabled: true,
			title:{
				text: "max-min temperature reading at IIEST"
			},
			axisY: {
				includeZero:false,
				title: "Temperature (°C)",
				suffix: " °C"
			},
			axisX: {
				valueFormatString: "DD MMM",
				interval: 1
			},
			data: [
			{
				type: "rangeArea",
				xValueFormatString: "DD MMM YY",
				yValueFormatString: "#0.## °C",
				toolTipContent: " <span style=\"color:#6D78AD\">{x}</span><br><b>Min:</b> {y[0]}<br><b>Max:</b> {y[1]}",
				dataPoints: newdata
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}                     