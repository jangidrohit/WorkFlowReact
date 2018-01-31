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
		inputTitle:""
	  }
	}

	onChangeHandler(evt){
		this.setState({data: evt.target.value});
	}

	_onSelect(e){
		this.setState({
			data : e.value
		});
	}


	nextQuestion(){
		const {actions}=this.props;
		actions.onGetNextQuestion("number");	
	}


	newEntry() {
  		if (this.inputTitle != undefined && this.inputTitle.value != "") {
		    this.state.lastUserMessage = document.getElementById("chatbox").value;

		    this.inputTitle.value = "";

		    this.state.messages.push(this.state.lastUserMessage);

		    this.nextQuestion()
			}

		    this.state.messages.push(this.state.botMessage);

	        for (var i = 1; i < 8; i++) {
		      if (this.state.messages[this.state.messages.length - i])
		        document.getElementById("chatlog" + i).innerHTML = this.state.messages[this.state.messages.length - i];	  		
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
		this.newEntry();
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

