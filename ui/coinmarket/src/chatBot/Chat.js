import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import * as actions from '../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './ChatClass.css';
import Dropdown from 'react-dropdown'
// import chat from './chat.html'

class Chat extends React.Component {

 	constructor(props) {
	  super(props);
      this.mainHtml = [
      	<div> </div>
	  ];

	  this.inputHtml =[
      	<div> </div>
	  ];

	  this.state = {
	  	data :""
	  }
	}

	onSend(e){

		this.mainHtml.push(<div className="container">
				  <span className="time-right">{this.state.data}</span>
				</div>);
	    				
	   	this.setState({
   			mainHtml:this.mainHtml
    	});

		const {actions}=this.props;
	}


	onChangeHandler(evt){
		this.setState({data: evt.target.value});
		this.mainHtml = [
      		<div> </div>
		];
	}

	_onSelect(e){
		this.setState({
			data : e.value
		});
	}


	componentWillMount(){
		const {formData}=this.props
		this.changeHtml(formData);
	}


	componentDidMount(){
		const {formData}=this.props;
		actions.onGetNextQuestion("number");
	}

	changeHtml(formData){
		this.setState({
   			inputHtml:this.inputHtml
    	});
    	if(formData.chatData.type == "option"){
    		this.inputHtml.push(
			    <Dropdown options={formData.chatData.selectItem} className="inputContainer"  onChange={(e) => {this._onSelect(e)}} placeholder="Select an option" />
    		);
    	}
    	else{
    		this.inputHtml.push(
				<input type={formData.type} className="inputContainer" placeholder={formData.value}  onChange={(e)=>{this.onChangeHandler(e)}}/>
    		);
    	}
    	return;
	}

	render(){
		const {formData}=this.props;
		return (
			<div>				
				{this.state.inputHtml}
				<input name="submitmsg" type="button"  id="submitmsg" onClick={(e)=>{this.onSend(e)}} value="Send" />

				<div className="container darker">
				  <p></p>
				  <span className="time-left">{formData.chatData.text}</span>
				</div>
				{this.state.mainHtml}
			</div>
        );
	}
};



const mapStateToProps = (state, ownProps) => {
	debugger;
    console.log(state, ownProps)
    return {
        formData: state
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
)(Chat)

