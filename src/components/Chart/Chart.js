import React , {Component} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import { CanvasJS } from '../../assets/canvasjs.react';
import { CanvasJSChart} from '../../assets/canvasjs.react';



export default class Chart extends Component {
    state = {
        data : [
            { x: 1, y: 64 },
            { x: 2, y: 62 },
            { x: 3, y: 64 },
            { x: 4, y: 62 },
            { x: 5, y: 64 },
            { x: 6, y: 60 },
            { x: 7, y: 58 },
            { x: 8, y: 59 },
            { x: 9, y: 53 },
            { x: 10, y: 54 },
            { x: 11, y: 61 },
            { x: 12, y: 60 },
            { x: 13, y: 55 },
            { x: 14, y: 60 }, 
		],
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
		this.state.data2.forEach((data, index) => {
			options2.push({x: index+1, y: data})
		});
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Bounce Rate by Week of Year"
			},
			axisY: {
				title: "Bounce Rate",
				includeZero: false,
				suffix: "%"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: {y}%",
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