import React from 'react'
import './Home.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// import * as config from './../Config/Config';

class Home extends React.Component {

	 constructor() {
      super();
      this.state = {
         data: []
      }
   }


 componentDidMount() {

    return fetch(`https://api.coinmarketcap.com/v1/ticker/`, {
		method: 'GET',
	})
	.then((res)=> {
		return res.json();
	})
	.then(function(res){
		this.setState({
			data : res
		})
	}.bind(this))

  }

	render(){
		return (
			<div>
			<h3>Cryptocurrency Market Capitalizations</h3>
			<div class="coins-details-container">
			 <BootstrapTable data={this.state.data} striped={true} hover={true}>
			      <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
			      <TableHeaderColumn dataField="symbol" dataSort={true}>Symbol</TableHeaderColumn>
			      <TableHeaderColumn dataField="market_cap_usd" dataSort={true}>Market Cap</TableHeaderColumn>
			      <TableHeaderColumn dataField="price_usd" dataSort={true}>Price (Usd)</TableHeaderColumn>
			      <TableHeaderColumn dataField="24h_volume_usd" dataSort={true}>Valume(24)</TableHeaderColumn>
			      <TableHeaderColumn dataField="total_supply" dataSort={true}>Supply</TableHeaderColumn>
			      <TableHeaderColumn dataField="percent_change_24h" dataSort={true}>Change</TableHeaderColumn>
			      <TableHeaderColumn dataField="name" dataSort={true}>Action</TableHeaderColumn>
			     
			  </BootstrapTable>

			</div>
			</div>
        )
	}
}

export default Home;