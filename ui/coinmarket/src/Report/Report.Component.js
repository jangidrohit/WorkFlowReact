import React from 'react';
import './Report.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Search from '../Search/Search.Component';
import * as appConfig from './../Config/Config';
import * as actions from '../redux/Action/reportAction';
import _ from 'lodash';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';	

	

class Report extends React.Component {

	constructor(props) {
		super(props);
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

		const {actions} = this.props;
		actions.onGetReport();	
	  }


	 priceFormatter(cell, row){
		return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
	  }

	render(){

		const {reportData}=this.props
		return (
			<div className="search-option">
			<div className="report-container">
			<Search className="form-control" onFilter={this.onFilter}/>
			<div className="report-details">
				 <BootstrapTable data={reportData.report.graphData} striped={true} hover={true}>
				      <TableHeaderColumn dataField="name" isKey={true} dataSort={true}>Name</TableHeaderColumn>
					  <TableHeaderColumn dataField="date" dataSort={true}>Date</TableHeaderColumn>
					  <TableHeaderColumn dataField="price" dataSort={true} dataFormat={this.priceFormatter}>Price</TableHeaderColumn>
					  <TableHeaderColumn dataField="change_rate" dataSort={true} dataFormat={this.priceFormatter}>Change Rate</TableHeaderColumn>
				      <TableHeaderColumn dataField="market_cap" dataSort={true} dataFormat={this.priceFormatter}>Market Cap</TableHeaderColumn>
					  <TableHeaderColumn dataField="action" dataSort={true} >Action</TableHeaderColumn>
				  </BootstrapTable>
			</div>
			</div>
			</div>
        )
	}
}

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps)
    return {
        reportData: state
    };
}


function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Report)