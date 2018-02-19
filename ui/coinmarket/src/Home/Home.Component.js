import React from 'react'
import './Home.css';
import '../chatBot/launcher.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import * as actions from '../redux/Action/homeAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Chat from '../chatBot/Chat';
import Launcher from '../chatBot/launch';
import PropTypes from 'prop-types';

class Home extends React.Component {

	 constructor(props) {
      super(props);
      this.state = {
      	data: []
      }
		this.state = {
		  showComponent: false,
        	isOpen: true
		};
		this._onButtonClick = this._onButtonClick.bind(this);
		this.handleClick = this.handleClick.bind(this);
      // pageData = {
      //    data: [],
      //    minRange : '',
      //    maxRange : ''
      // }
    //  this.ActionOption = this.ActionOption.bind(this)
   }


  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  _handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

 componentWillMount() {

	const {actions, formdate} = this.props;
	actions.onGetCoinDetails();

 //    return fetch(`${appConfig.default.apiRoute}/coins`, {
	// 	method: 'GET',
	// })
	// .then((res)=> {
	// 	return res.json();
	// })
	// .then(function(res){
	// 	this.setState({
	// 		data : res.result
	// 	})
	// }.bind(this))

  }


  	onChangeHandler (e){
  		const {actions} = this.props;
		actions.onChangeRange({[e.target.name]: e.target.value});
  	}
  	onSaveRange(){
  		const {actions, formdate} = this.props;
  		actions.onSaveRangeAct(formdate);
  	}

  	// componentWillReceiveProps (newProps){
  	// 	if(newProps.success.result.ok){
  	// 		alert('Save Range')
  	// 	}
  	// }
  	
	_onButtonClick() {
		this.setState({
		  showComponent: true,
		});
	}

	handleClick(){
	    this.setState({
		  		showComponent: false,
		});
	}

	render(){
		const {history, formdate, actions}=this.props
		var options = {
			onRowClick: function(row, target){
				history.push('/chart/'+ row.name);
			}
		}

		return (
			<div className="coins-details-container">

				<div className="sc-launcher">
					<img className="sc-open-icon" src="close-icon.png" onClick={this._onButtonClick} />
			        {this.state.showComponent ?
			           	<Launcher onClose={this.handleClick.bind(this)}
           		        isOpen={this.state.isOpen}
			           	/> : null
		        }
				</div>
				<div className="coins-details-header">
					<div className="coin-title"><h3>Cryptocurrency Market Capitalizations</h3></div>
					<div className="coin-range">
						<div className="min-range"><input tyle="text" className="form-control" onChange={(e)=>{this.onChangeHandler(e)}} placeholder="Min range" value={formdate.minRange} name="minRange"/></div>
						<div className="max-range"><input tyle="text" className="form-control" onChange={(e)=>{this.onChangeHandler(e)}} placeholder="Max range" value={formdate.maxRange} name="maxRange"/></div>

						<div className="max-range"><button type="button" className="btn btn-primary" onClick={(e)=>{this.onSaveRange(e)}}>Save Range</button></div>
					</div>
				</div>

				<div className="coins-details">
				 <BootstrapTable data={formdate.coins} options={options}  striped={true} hover={true}>
				      <TableHeaderColumn dataField="name" filter={ { type: 'RegexFilter', placeholder: 'Name' } } isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
				      <TableHeaderColumn dataField="symbol" filter={ { type: 'RegexFilter', placeholder: 'Symbol' } } dataSort={true}>Symbol</TableHeaderColumn>
				      <TableHeaderColumn dataField="market_cap_usd" filter={ { type: 'RegexFilter', placeholder: 'Market cap' } } dataSort={true}>Market Cap</TableHeaderColumn>
				      <TableHeaderColumn dataField="price_usd" filter={ { type: 'RegexFilter', placeholder: 'Price' } } dataSort={true}>Price (Usd)</TableHeaderColumn>
				      <TableHeaderColumn dataField="24h_volume_usd" filter={ { type: 'RegexFilter', placeholder: 'Valume' } } dataSort={true}>Valume(24)</TableHeaderColumn>
				      <TableHeaderColumn dataField="total_supply"  filter={ { type: 'RegexFilter', placeholder: 'Supply' } } dataSort={true}>Supply</TableHeaderColumn>
				      <TableHeaderColumn dataField="percent_change_24h" filter={ { type: 'RegexFilter', placeholder: 'Change' } } dataSort={true}>Change</TableHeaderColumn>
				      <TableHeaderColumn dataFormat={this.DetailsOption} width="80"  >Graph</TableHeaderColumn>
				  </BootstrapTable>
				</div>
			</div>
        )
	}
}



// const mapStateToProps = state => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps)
    return {
        formdate: state
    };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onSaveRangeAction(data){
//       dispatch(onSaveRangeAct(data))
//     },
//     navigateToChart(data){
//     	dispatch(navigateToChartAct(data))
//     }
//   }
// }

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

Launcher.propTypes = {
  handleClick: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)



