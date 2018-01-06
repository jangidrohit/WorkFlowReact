import React from 'react';
import './Report.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Search from '../Search/Search.Component';
import * as appConfig from './../Config/Config';
class Report extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	 }
	//  onFilter(data){
	// 	console.log(data);
	//  }

	componentDidMount() {
		return fetch(`${appConfig.default.apiReport}`, {
			method: 'GET',
		})
		.then((res)=> {
			console.log('adsadadadsasd');
			return res.json();
		})
		.then(function(res){
			this.setState({
				data : res.result
			})
		}.bind(this))
	
	  }

	//  reportList() {
	// 	$.getJSON('https://localhost/api/report')
	// 	  .then((results)  =>{
	// 		console.log('afsafafdsasd');			
	// 	  }) 
	//   }
	

	 priceFormatter(cell, row){
		return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
	  }

	render(){
		
		
		return (
			<div>
			<h4>Report</h4>
			<div className="report-container">
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