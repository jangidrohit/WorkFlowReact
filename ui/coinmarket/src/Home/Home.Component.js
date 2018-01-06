import React from 'react'
import './Home.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';

class Home extends React.Component {

	 constructor() {
      super();
      this.state = {
         data: [],
         minRange : 5,
         maxRange : 15
      }
      this.ActionOption = this.ActionOption.bind(this)
   }


 componentDidMount() {
    return fetch(`${appConfig.default.apiRoute}/coins`, {
		method: 'GET',
	})
	.then((res)=> {
		debugger;
		return res.json();
	})
	.then(function(res){
		this.setState({
			data : res.result
		})
	}.bind(this))

  }

  	onChabgeHandler(e){
  		this.setState({[e.target.name]: e.target.value})
  	}

	ActionOption(cell, row){
			
			if (row.percent_change_24h <= this.state.minRange) {
				 return '<button type="button" class="btn btn-success">Buy</button> ';
			}
			if (row.percent_change_24h >= this.state.maxRange) {
				 return '<button type="button" class="btn btn-primary">Sell</button> ';
			}
		 
		}

	DetailsOption(cell, row){
	  return '<div class="chat-option"><i class="glyphicon glyphicon-list-alt"></i></div>';
	}

	render(){
		const {history}=this.props
		var options = {
			onRowClick: function(row){
				history.push('/chart/'+ row.name);
			}
		}

		return (
			<div className="coins-details-container">
				<div className="coins-details-header">
					<div className="coin-title"><h3>Cryptocurrency Market Capitalizations</h3></div>
					<div className="coin-range">
						<div className="min-range"><input tyle="text" className="form-control" onChange={(e)=>{this.onChabgeHandler(e)}} value={this.state.minRange} placeholder="Min range" name="minRange"/></div>
						<div className="max-range"><input tyle="text" className="form-control" onChange={(e)=>{this.onChabgeHandler(e)}} value={this.state.maxRange} placeholder="Max range" name="maxRange"/></div>
					</div>
				</div>

				<div className="coins-details">
				 <BootstrapTable data={this.state.data} options={options}  striped={true} hover={true}>
				      <TableHeaderColumn dataField="name" filter={ { type: 'RegexFilter', placeholder: 'Name' } } isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
				      <TableHeaderColumn dataField="symbol" filter={ { type: 'RegexFilter', placeholder: 'Symbol' } } dataSort={true}>Symbol</TableHeaderColumn>
				      <TableHeaderColumn dataField="market_cap_usd" filter={ { type: 'RegexFilter', placeholder: 'Market cap' } } dataSort={true}>Market Cap</TableHeaderColumn>
				      <TableHeaderColumn dataField="price_usd" filter={ { type: 'RegexFilter', placeholder: 'Price' } } dataSort={true}>Price (Usd)</TableHeaderColumn>
				      <TableHeaderColumn dataField="24h_volume_usd" filter={ { type: 'RegexFilter', placeholder: 'Valume' } } dataSort={true}>Valume(24)</TableHeaderColumn>
				      <TableHeaderColumn dataField="total_supply"  filter={ { type: 'RegexFilter', placeholder: 'Supply' } } dataSort={true}>Supply</TableHeaderColumn>
				      <TableHeaderColumn dataField="percent_change_24h" filter={ { type: 'RegexFilter', placeholder: 'Change' } } dataSort={true}>Change</TableHeaderColumn>
				      <TableHeaderColumn dataFormat={this.DetailsOption} width="80" >Graph</TableHeaderColumn>
				      <TableHeaderColumn dataFormat={this.ActionOption} width="100">Action</TableHeaderColumn>
				  </BootstrapTable>

				</div>
			</div>
        )
	}
}

export default Home;