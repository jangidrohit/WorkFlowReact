import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import * as actions from '../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './ChatClass.css';
import Messages from './Messages'
// import chat from './chat.html'
import UserInput from './userInput';
import _ from 'lodash';
import NumberInput from './InputType/numberInput';
import TextInput from './InputType/textInput';
import DOBInput from './InputType/dobInput';
import EmailInput from './InputType/emailInput';
import SuggesstionInput from './InputType/suggesstionInput';

class Chat extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	  	data :"",
	  	messages : [],
		lastUserMessage : "",
		botMessage : "", 
		botName : 'Chatbot',
		inputTitle:"",
		process:0
	  };
	}

	componentWillMount(){
		const {actions, formData}=this.props;
	    //this.state.messages.push(formData.chatData.text);
		actions.onChangeInput();
	}



  renderView(){
  	debugger;
	const {formData}=this.props;
	var lastProp = _.last(formData.chatData)	
    if(formData.chatData.length > 0){
	    switch(lastProp.type){
			case "number" :
				return  <NumberInput obj={this.props} />
			case "date" :
				return <DOBInput obj={this.props} />
			case "email" :
				return <EmailInput obj={this.props} />
			case "suggest" :
				return <SuggesstionInput obj={this.props} />
			default : 
				return <TextInput obj={this.props} />
			}
  	}
    else{
      return <TextInput obj={this.props} />
    }
  }


	render(){
		const {formData}=this.props;	

		return (
		<div className='sc-chat-window'>
			<div className="sc-header">
			</div>
			<div className="messageLists place">
	 			 {
	 			 	formData.chatData.map((message, i)=> {
 			 		    let contentClassList =  message.author === "Me" ? "sent" : "received";
 			 			return <div className = {contentClassList}> {message.text}</div>
 			 			}
	 			 	)		 	 			 	
				}
			</div>
			<div className="sc-user-input">	 					
				{this.renderView()}
			</div>
        </div>
        );
	}
};



const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps);
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

