import * as appConfig from '../../Config/Config';
import * as action from '../Action';
import _ from 'lodash';

var userMessages = [];
var i = 0;
var questions = [{
		type: "text",
		text: "Hi, What can I do for you",
		author:'Received',
		isSuccess: false,
		step: 1
	},
	{
		type: "number",
		text: "Please enter mobile number",
		author:'Received',
		isSuccess: false,
		step: 2
	},
	{
		type: "date",
		text: "Please enter DOB",
		author:'Received',
		isSuccess: false,
		step:2
	},
	{
		type:"email",
		text:"Please enter email",
		author:'Received',
		isSuccess: false,
		step:2
	},	
	{
		type:"suggest",
		text:"The latest price is 20000. Do you want Sell or Buy",
		author:'Received',
		isSuccess: false,
		step:2
	}]


// var initialStep = {
// 	text : "Hi, What can I do for you",
// 	type: "text",
// 	isComplete : false
// }


export const onChangeInput = (text) => {
	debugger;
	return (dispatch) => {
			debugger;
			var find_obj = _.find(questions, function(obj) {
			    return obj.isSuccess == false;
			});

			if(text){
				var userData = {
					text: text,
					author: 'Me'
				}
				userMessages.push(userData);
			}

			userMessages.push(find_obj);
			dispatch(action.onRequestChat(userMessages));
			find_obj.isSuccess = true;
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



