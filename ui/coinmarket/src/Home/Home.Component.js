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


	ActionOption(cell, row){
			debugger;
		  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
		}

		DetailsOption(cell, row){
			debugger;
		  return '<div> Amit </div> ';
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
			      <TableHeaderColumn dataField="name" filter={ { type: 'RegexFilter', placeholder: 'Name' } } isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
			      <TableHeaderColumn dataField="symbol" filter={ { type: 'RegexFilter', placeholder: 'Symbol' } } dataSort={true}>Symbol</TableHeaderColumn>
			      <TableHeaderColumn dataField="market_cap_usd" filter={ { type: 'RegexFilter', placeholder: 'Market cap' } } dataSort={true}>Market Cap</TableHeaderColumn>
			      <TableHeaderColumn dataField="price_usd" filter={ { type: 'RegexFilter', placeholder: 'Price' } } dataSort={true}>Price (Usd)</TableHeaderColumn>
			      <TableHeaderColumn dataField="24h_volume_usd" filter={ { type: 'RegexFilter', placeholder: 'Valume' } } dataSort={true}>Valume(24)</TableHeaderColumn>
			      <TableHeaderColumn dataField="total_supply"  filter={ { type: 'RegexFilter', placeholder: 'Supply' } } dataSort={true}>Supply</TableHeaderColumn>
			      <TableHeaderColumn dataField="percent_change_24h" filter={ { type: 'RegexFilter', placeholder: 'Change' } } dataSort={true}>Change</TableHeaderColumn>
			      <TableHeaderColumn dataFormat={this.DetailsOption} >View Details</TableHeaderColumn>
			      <TableHeaderColumn dataFormat={this.ActionOption}>Action</TableHeaderColumn>
			  </BootstrapTable>

			</div>
			</div>
        )
	}
}

export default Home;