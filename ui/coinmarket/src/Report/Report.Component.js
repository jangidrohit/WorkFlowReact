import React from 'react'
import './Report.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Search from '../Search/Search.Component'
class Report extends React.Component {

	constructor() {
		super();
		this.state = {
		   data: 
		   [
			  {
				 "id":1,
				 "name":"Bitcoin",
				 "date":"Jan 06 2018",
				 "price":"200",
				 "changeRate":"100",
				 "marketCap":"20",
				 "action":"Y"
			  },
			  {
				"id":2,
				"name":"Bitcoin",
				"date":"Jan 06 2018",
				"price":"200",
				"changeRate":"230",
				"marketCap":"20",
				"action":"N"
			 },
			 {
				"id":3,
				"name":"Bitcoin",
				"date":"Jan 06 2018",
				"price":"250",
				"changeRate":"50",
				"marketCap":"0",
				"action":"Y"
			 }
		   ]
		}
	 }
	 onFilter(data){
		console.log(data)
	 }
	 priceFormatter(cell, row){
		return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
	  }

	render(){
		return (
			<div>
			<h4>Report</h4>
			<div class="report-container">
			<Search  onFilter={this.onFilter}/>
			 <BootstrapTable data={this.state.data} striped={true} hover={true}>
			      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>#</TableHeaderColumn>
			      <TableHeaderColumn dataField="name" dataSort={true}>Name</TableHeaderColumn>
				  <TableHeaderColumn dataField="date" dataSort={true}>Date</TableHeaderColumn>
				  <TableHeaderColumn dataField="price" dataSort={true} dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
				  <TableHeaderColumn dataField="changeRate" dataSort={true} dataFormat={this.priceFormatter}>Change Rate</TableHeaderColumn>
			      <TableHeaderColumn dataField="marketCap" dataSort={true} dataFormat={this.priceFormatter}>Market Cap</TableHeaderColumn>
				  <TableHeaderColumn dataField="action" dataSort={true} >Action</TableHeaderColumn>
			  </BootstrapTable>

			</div>
			</div>
        )
	}
}

export default Report;