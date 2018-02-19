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
import LogoImg from '../images/IconsError.jpg';
import CloseIcon from '../images/close-icon.png';
import AutoSuggest from './InputType/autoSuggest';
import MobileNumberInput from './InputType/mobileNumberInput';
import userImg from '../images/icons8-communicate-50.png';
import botImg from '../images/icons8-hdtv-50.png';


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
		process:0,
		isOpen : false
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
			case "autoSuggest" :
				return <AutoSuggest obj={this.props} />
			case "mobileNumber" :
				return <MobileNumberInput obj={this.props} />
			default : 
				return <TextInput obj={this.props} />
			}
  	}
    else{
      return <TextInput obj={this.props} />
    }
  }

	onSelect(evt){
		debugger;
    	const {formData}=this.props;
    	var value = ""
		if(evt.target.name == 'bitcoin'){
			value = formData.coins[0].price_usd + " USD"
		}
		else{
			value = formData.coins[1].price_usd + " USD"
		}

		var response = {
			text : value,
			author : "Me",
			local : "local"
		}

		formData.chatData.push(response)
		this.setState({
			data: evt.target.value
		})
	}
	
	onStop(evt){
    	const {formData}=this.props;
		var response = {
			text : "Thanks",
			author : "Received"
		}
		formData.chatData.push(response)
		this.setState({
			data: evt.target.value
		})
	}

	onStart(evt){
		const {actions}=this.props;
    	var senderObj = {
    		text : evt.target.name,
    		error : false
    	}
    	actions.onChangeInput(senderObj);
	}

	onSend(evt) {
		debugger;
    	const {actions}=this.props;
    	var senderObj = {
    		text : evt.target.name,
    		error : false
    	}
    	actions.onChangeInput(senderObj);
 	}

	render(){
		const {formData}=this.props;

		return (
		<div className='sc-chat-window'>
			<div className="sc-header">
				<p className="headerText">Ask anything you want</p>
				<div className="sc-header--close-button" onClick={this.props.onClose}>
					<img src= {CloseIcon} alt=""/>
				</div>
			</div>
			<div className="messageLists place">
				<div className="insideMessage"> 
 			    {
	 			 	formData.chatData.map((message, i)=> {
	 			 		    let contentClassList =  message.author === "Me" ? "sent" : "received";
	 			 		    let errorClass = message.error === "error" ? LogoImg : "";
	 			 		    var chatUsersImage = message.author === "Me" ? userImg : botImg;
	 			 			if(message.step != 1 && message.local == "local"){
								return <div>
									<div className = "sent">
										<img src={chatUsersImage} />
										<p> {message.text} </p>
									</div>
								<div className = "received"> Would you like to <br /> <a className="suggestion"  name="sell"
		 							onClick={(e)=>{this.onSend(e)}}>Sell</a> or <a className="suggestion" name="buy"  onClick={(e)=>{this.onSend(e)}}>Buy</a></div>
		 						</div>
	 			 			}
	 			 			if(message.step == "last"){
									return <div className = {contentClassList}> {message.text} <br /> <a className="suggestion"  name="bitcoin"
	 			 					onClick={(e)=>{this.onStart(e)}}>Yes</a> <br /> <a className="suggestion" name="ethereum"  
	 			 					onClick={(e)=>{this.onStop(e)}}>No</a></div>							
	 			 			}
	 			 			else{
								return <div className = {contentClassList}>
								<img src={chatUsersImage} />
								<img src={errorClass} />
								 <p> {message.text}	</p></div>
							}		 						 				 			 		
 			 			}
	 			 	)		 	 			 	
				}
				</div>
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

