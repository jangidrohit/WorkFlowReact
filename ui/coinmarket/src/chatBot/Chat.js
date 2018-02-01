import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import * as actions from '../redux/Action/chatAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import './ChatClass.css';
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

	nextQuestion(){
		const {actions, formData}=this.props;
		var chat = ["answer","number","email","text","dob"]
		actions.onGetNextQuestion(chat[this.state.process]);
	    this.state.process += 1;
	
	}

	componentWillReceiveProps(nextProps){
		debugger;
		this.state.botMessage = nextProps.formData.chatData.text;
		this.state.data = "";
		this.botData()	
	}

	botData(){
	    this.state.messages.push("<b>BOT : </b>" + this.state.botMessage);

        for (var i = 1; i < 8; i++) {
	      if (this.state.messages[this.state.messages.length - i])
	        document.getElementById("chatlog" + i).innerHTML = this.state.messages[this.state.messages.length - i];	  		
  		}
	}

	newEntry() {
  		if (this.state.data != "") {
		    this.state.lastUserMessage = this.state.data;
		    this.inputTitle.value = "";

		    this.state.messages.push(this.state.lastUserMessage);
		    this.nextQuestion()
			}
	}

	onSend(evt) {
	    this.inputTitle.value = "";
	    this.newEntry()	
	}

	componentDidMount(){
		debugger;
		const {formData, actions}=this.props;
		this.state.botMessage = formData.chatData.text;		
		this.botData();
	}


	render(){
		const {formData}=this.props;
		return (
		<div id='bodybox'>
 			 <div id='chatboarder'>
 			 	<p id="chatlog7" className="container darker">&nbsp;</p>
			    <p id="chatlog6" className="container darker">&nbsp;</p>
			    <p id="chatlog5" className="container darker">&nbsp;</p>
			    <p id="chatlog4" className="container darker">&nbsp;</p>
			    <p id="chatlog3" className="container darker">&nbsp;</p>
			    <p id="chatlog2" className="container darker">&nbsp;</p>
			    <p id="chatlog1" className="container darker">&nbsp;</p>				
				<input type={formData.chatData.type} id="chatbox" className="inputContainer"
				ref={el => this.inputTitle = el}
				 placeholder={formData.value}  onChange={(e)=>{this.onChangeHandler(e)}}/>
				<input name="submitmsg" type="submit"  id="submitmsg" className="btmInputContainer" onClick={(e)=>{this.onSend(e)}} value="Send" />		
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

