import * as appConfig from '../../Config/Config';
import * as action from '../Action';

var userMessages = [];
var i = 0;
var questions = {
		number:{
			type: "number",
			text: "Please enter mobile number",
			author:'Received',
			isSuccess: false
	},
		query:{
			type: "text",
			text: "Please enter your query",
			author:'Received',
			isSuccess: false
	},
		dob:{
			type: "text",
			text: "Please enter DOB",
			author:'Received',
			isSuccess: false
	},
		price:{
			type:"text",
			text:"The latest price is 20000. Do you want Sell or Buy",
			author:'Received',
			isSuccess: false
	},
		email:{
			type:"text",
			text:"Please enter email",
			author:'Received',
			isSuccess: false
	}
}



export const onChangeInput = (text) => {
	debugger;
	if(text){
		return (dispatch) => {
			var userData = {
				text: text,
				author: 'Me'
			}
			userMessages.push(userData);
			dispatch(action.onRequestChat(userMessages));					
		}
	}
}

export const onRequestQuestion = (text) => {
	debugger;
	return (dispatch) => {
			var data = questions[text];
			userMessages.push(data);
			dispatch(action.onRequestQues(userMessages));
			dispatch(action.onQues(data));					
	}
}

// export const onGetNextQuestion = (text) => {
// 	if(text){		
// 	  return (dispatch) => {
// 	   	dispatch(action.onRequestChat(questions[text]));
// 	  }
// 	}
// }

// export const onRequest = (data) => {
// 		if(data){
// 			messages.push(data);
// 			return (dispatch) => {
// 				dispatch(action.onRequestChat(messages));		
// 		}
// 	}
// }



