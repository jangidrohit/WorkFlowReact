import React from 'react'
import './Chart.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import {LineChart} from 'react-easy-chart';
import _ from 'lodash';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';


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
 
        const { match, formdate} = this.props        

    	var name = (match.params.name.split(' ')).join('-');
		fetch(`${appConfig.default.chartApi}${name}`, { method: 'GET'})
		  .then(response => response.json())
		  .then(res =>{
                var market_cap = _.map(res.market_cap_by_available_supply,function(data){
                    return { x:new Date(data[0]),  y:data[1] }
                });
                var price_btc = _.map(res.price_btc,function(data){
                    return { x:new Date(data[0]), y:data[1] }
                });
                var price_usd = _.map(res.price_usd,function(data){
                    return { x:new Date(data[0]), y:data[1] }
                });
                var volume_usd = _.map(res.volume_usd,function(data){
                    return { x:new Date(data[0]), y:data[1] }
                });

                this.setState({ 
                    chartData: market_cap ,
                    price_btc: price_btc,
                    price_usd: price_usd,
                    volume_usd: volume_usd
                });
             
          });
	}
	render(){
        console.log(this);
        const {match ,formdate}=this.props

        var selectedCoin = _.find(formdate.coins, function(coin){
            return coin.name === match.params.name;
        }); 

		return (
			<div>
                <div>
                {
                    selectedCoin && <ul>
                        {selectedCoin.name}
                    </ul>
                }
                </div>
			    <h4>{match.params.name}</h4>
                <LineChart
                    axes
                    margin={{top: 10, right: 30, bottom: 100, left: 100}}
                    axisLabels={{x: 'Total Revenue', y: 'January'}}
                    lineColors={['green', 'Red', 'Blue', 'Gray']}
                    tickTimeDisplayFormat={'%d %m'}
                    width={1000}
                    interpolate={'cardinal'}
                    height={500}
                    data={[
                        this.state.chartData,
                        this.state.price_btc,
                        this.state.price_usd,
                        this.state.volume_usd
                    ]}
                />
                <div>
                    <ul className="chart-legend">
                    <li className="c-green"><span><div></div></span><span>Market Cap</span></li>
                    <li className="c-red"><span><div></div></span><span>Price (USD)</span></li>
                    <li className="c-blue"><span><div></div></span><span>Price (BTC)</span></li>
                    <li className="c-gray"><span><div></div></span><span>Volume</span></li>
                    </ul>
                </div>
			</div>
        )
	}
}



const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps)
    return {
        formdate: state
    };
}

export default connect(
  mapStateToProps
)(Chart)


