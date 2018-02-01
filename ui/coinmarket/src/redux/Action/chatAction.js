import * as appConfig from '../../Config/Config';
import * as action from '../Action';

var questions = {
	number : {
		type: "number",
		text: "Please enter mobile number"
	},
	text : {
		type: "text",
		text: "Please enter your query"
	},
	dob:{
		type: "text",
		text: "Please enter DOB"
	},
	answer:{
		type:"text",
		text:"The latest price is 20000. Do you want"
	},
	email:{
		type:"text",
		text:"Please enter email"
	}
}



export const onGetNextQuestion = (text) => {
	if(text){		
	  return (dispatch) => {
	   	dispatch(action.onRequestChat(questions[text]));
	  }
	}
}



