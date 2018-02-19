import * as appConfig from '../../Config/Config';
import * as action from '../Action';
import _ from 'lodash';

var userMessages = [];
var questions = [{
		type: "autoSuggest",
		text: "Hi, Do you want to know about the price of",
		author:'Received',
		isSuccess: false,
		step: 1
	},
	{
		type: "number",
		text: "Please enter the unit",
		author:'Received',
		isSuccess: false,
		step: 2
	},
	{
		type: "mobileNumber",
		text: "Please enter the mobile number",
		author:'Received',
		isSuccess: false,
		step: 2
	},
	{
		type: "date",
		text: "Please enter your DOB",
		author:'Received',
		isSuccess: false,
		step:2
	},
	{
		type:"email",
		text:"Please enter the email",
		author:'Received',
		isSuccess: false,
		step:2
	},	
	{
		type:"text",
		text:"Your request is successfully completed. Do you need any thing",
		author:'Received',
		isSuccess: false,
		step:"last"
	}]


var validateQuestion = {
	email : {
		text : "Please enter the valid email Id",
		author:'Received',
		type: "email",
		error: "error"
	},
	number : {
		text :"Please enter the valid number",
		author:'Received',
		type: "number",
		error: "error"
	}
}


export const onChangeInput = (req) => {
	if(req == undefined){
		req = {
			error : false,
			text : ""
		}
	}
	return (dispatch) => {
		if(!req.error){
			var find_obj = _.find(questions, function(obj) {
			    return obj.isSuccess == false;
			});

			if(req.text){
				var userData = {
					text: req.text,
					author: 'Me'
				}
				userMessages.push(userData);
				find_obj.isSuccess = true;
			}

			if(find_obj.step ==1){
				find_obj.isSuccess = true;
			}

			userMessages.push(find_obj);
			dispatch(action.onRequestChat(userMessages));
			if(find_obj.step =="last"){
				_.map(questions, function(a){
					a.isSuccess = false;
				})
			}
		}
		else{
			if(req.text){
				var userData = {
					text: req.text,
					author: 'Me'
				}
				userMessages.push(userData);
			}
			var receiveObj = validateQuestion[req.type]
			userMessages.push(receiveObj);
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



