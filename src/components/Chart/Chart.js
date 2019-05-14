import React , {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import { CanvasJS } from '../../assets/canvasjs.react';
import { CanvasJSChart} from '../../assets/canvasjs.react';



export default class Chart extends Component {
    state = {
		data2 : [64,69,68,67,63,56,55,63,57,59,53,63,64,52,58,62]
    }
    onClick = ()=> {
        var newData = [...this.state.data2];
		newData.shift();
		newData.push(60);
        this.setState({data2: newData})
    }

	render() {
		let options2 = [];
		this.props.data.forEach((data, index) => {
			options2.push({x: index+1, y: data})
		});
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: `${this.props.yaxis} reading every 1 hour`
			},
			axisY: {
				title: `${this.props.yaxis} Readings`,
				includeZero: false,
				suffix: `${this.props.suffix}`
			},
			axisX: {
				title: "Time",
				prefix: "T",
				interval: 1
			},
			data: [{
				type: "line",
				toolTipContent: `hour {x}: {y}${this.props.suffix}`,
				dataPoints: options2
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