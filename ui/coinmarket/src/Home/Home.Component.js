import React from 'react'
import './Home.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';

class Home extends React.Component {

	 constructor() {
      super();
      this.state = {
         data: []
      }
   }


 onRowClick(){

 }

 componentDidMount() {
    return fetch(`${appConfig.default.coinMarketRout}`, {
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
		const {history}=this.props
		var options = {
			onRowClick: function(row){
				history.push('/chat/'+ row.name);
			}
		}
		return (
			<div>
			<h3>Cryptocurrency Market Capitalizations</h3>
			<div className="coins-details-container">
			 <BootstrapTable data={this.state.data} options={options}  striped={true} hover={true}>
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