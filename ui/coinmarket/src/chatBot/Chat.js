import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import * as actions from '../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './ChatClass.css';
import Messages from './Messages'
// import chat from './chat.html'

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
	  }
	}

	onChangeHandler(evt){
		this.setState({data: evt.target.value});
	}

	// nextQuestion(){
	// 	const {actions, formData}=this.props;
	// 	var chat = ["answer","number","email","text","dob"]
	// 	actions.onGetNextQuestion(chat[this.state.process]);
	//     this.state.process += 1;
	
	// }

	botData(){	
		const {actions}=this.props;
		var chat = ["number","email","text","dob"]
	    actions.onRequestQuestion(chat[this.state.process]);
	    this.state.process += 1;

    //     for (var i = 1; i <= 8; i++) {
	   //    if (this.state.messages[this.state.messages.length - i])
	   //      document.getElementById("chatlog" + i).innerHTML = this.state.messages[this.state.messages.length - i];	  		
  		// }
	}

	// newEntry() {
 //  		if (this.state.data != "") {
	// 	    this.state.lastUserMessage = this.state.data;
	// 	    this.inputTitle.value = "";

	// 	    this.state.messages.push("User"+this.state.lastUserMessage);
	// 	    this.nextQuestion()
	// 		}
	// }

	onSend(evt) {
		const {actions}=this.props;
		this.inputTitle.value = ""
	    actions.onChangeInput(this.inputTitle.value);
		this.botData()	
	}

	componentWillMount(){
		const {actions, formData}=this.props;
	    this.state.messages.push(formData.chatData.text);
	}

	// componentDidMount(){
	// 	debugger;
	// 	const {formData, actions}=this.props;
	// 	this.state.botMessage = formData.chatData.text;		
	// 	this.botData();
	// }
	componentDidReceiveProps() {
		const {formData}=this.props;
		formData.chatData.map((res) => {
			if(res.isSuccess == false){
				res.isSuccess = true;
			}
		})
	}

	render(){
		const {formData}=this.props;	

		return (
		<div className='sc-chat-window'>
			<div className="sc-header">
			</div>
			<div>
	 			 {
	 			 	formData.chatData.map((message, i)=> {
 			 		    let contentClassList =  message.author === "Me" ? "sent" : "received";
 			 			return <div className = {contentClassList}> {message.text}</div>
 			 			}
	 			 	)		 	 			 	
				}
			</div>
			<div className="sc-user-input">	 					
				<input type={formData.chatData.type} id="chatbox" className="sc-user-input--text"
				ref={el => this.inputTitle = el}
				 placeholder={formData.value}  onChange={(e)=>{this.onChangeHandler(e)}}/>

				<input name="submitmsg" type="submit"  id="submitmsg" className="sc-user-input--send-icon-wrapper" onClick={(e)=>{this.onSend(e)}} value="Send" />		
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

