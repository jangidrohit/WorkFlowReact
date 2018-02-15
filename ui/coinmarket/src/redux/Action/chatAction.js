import * as appConfig from '../../Config/Config';
import * as action from '../Action';
import _ from 'lodash';

var userMessages = [];
var questions = [{
		type: "text",
		text: "Hi, What can I do for you",
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
		type: "number",
		text: "Please enter the mobile number to validate the crediential",
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
		text:"Your request is successfully completed. Do you want to start it again ",
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
			}

			userMessages.push(find_obj);
			dispatch(action.onRequestChat(userMessages));
			find_obj.isSuccess = true;
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



