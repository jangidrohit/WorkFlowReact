import React from 'react';
import './Report.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Search from '../Search/Search.Component';
import * as appConfig from './../Config/Config';
import _ from 'lodash';



class Report extends React.Component {

	constructor() {
		super();
		this.state = {

		}
		this.onFilter = this.onFilter.bind(this);
	 }
	 onFilter(data){
		var filterd = _.filter(this.state.data, (d) => {
			return d.action = data
		});

		this.setState({
			data : filterd
		})
	 }

	componentDidMount() {
		return fetch(`${appConfig.default.apiRoute}/report`, {
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


	 priceFormatter(cell, row){
		return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
	  }

	render(){
		return (
			<div className="search-option">
			<div className="report-container">
			<Search className="form-control" onFilter={this.onFilter}/>
			<div className="report-details">
				 <BootstrapTable data={this.state.data} striped={true} hover={true}>
				      <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
					  <TableHeaderColumn dataField="date" dataSort={true}>Date</TableHeaderColumn>
					  <TableHeaderColumn dataField="price" dataSort={true} dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
					  <TableHeaderColumn dataField="changeRate" dataSort={true} dataFormat={this.priceFormatter}>Change Rate</TableHeaderColumn>
				      <TableHeaderColumn dataField="marketCap" dataSort={true} dataFormat={this.priceFormatter}>Market Cap</TableHeaderColumn>
					  <TableHeaderColumn dataField="action" dataSort={true} >Action</TableHeaderColumn>
				  </BootstrapTable>
			</div>
			</div>
			</div>
        )
	}
}

export default Report;