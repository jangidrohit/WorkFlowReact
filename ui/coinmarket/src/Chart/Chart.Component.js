import React from 'react'
import './Chart.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import {LineChart} from 'react-easy-chart';
import _ from 'lodash';

class Chart extends React.Component {
    constructor(props) {
		super(props);
	
		this.state = {
            chartData: [],
            price_btc: [],
            price_usd: [],
            volume_usd: []
		};
	}
    componentDidMount() {
        const { match} = this.props
    	var name = match.params.name
		fetch(`${appConfig.default.chartApi}${name}`, { method: 'GET'})
		  .then(response => response.json())
		  .then(res =>{
                var result = _.map(res.market_cap_by_available_supply,function(data){
                    return {
                            x:new Date(data[0]),
                            y:data[1]
                    }
                })
                // var result = _.map(res.price_btc,function(data){
                //     return {
                //             x:new Date(data[0]),
                //             y:data[1]
                //     }
                // })
                // var result = _.map(res.price_usd,function(data){
                //     return {
                //             x:new Date(data[0]),
                //             y:data[1]
                //     }
                // })
                // var result = _.map(res.market_cap_by_available_supply,function(data){
                //     return {
                //             x:new Date(data[0]),
                //             y:data[1]
                //     }
                // })
                

                this.setState({ chartData: result })
          });
	}
	render(){
		console.log(this);
		return (
			<div>
			    <h4>Chart</h4>
                <LineChart
                     axes
                     margin={{top: 10, right: 30, bottom: 100, left: 100}}
                     axisLabels={{x: 'Total Revenue', y: 'January'}}
                     lineColors={['green']}
                     tickTimeDisplayFormat={'%d %m'}
                     width={800}
                     interpolate={'cardinal'}
                     height={300}
                    data={[
                    this.state.chartData
                    ]}
                />
			</div>
        )
	}
}

export default Chart;