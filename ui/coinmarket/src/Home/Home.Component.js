import React from 'react'
import './Home.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Home extends React.Component {

	 constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
   }

   priceFormatter(cell, row){
	  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
	}

	render(){
		return (
			<div>
			<h3>Cryptocurrency Market Capitalizations</h3>

			<div class="coins-details-container">

			 <BootstrapTable data={this.state.data} striped={true} hover={true}>
			      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
			      <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
			      <TableHeaderColumn dataField="price" dataFormat={this.priceFormatter}>Product Price</TableHeaderColumn>
			  </BootstrapTable>

			</div>
			</div>
        )
	}
}

export default Home;