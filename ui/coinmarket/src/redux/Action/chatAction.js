import * as appConfig from '../../Config/Config';
import * as action from '../Action';

var questions = [
	"number" : {
		type: "number",
		text: "Please enter mobile number",
		isComplete: ""
	},
	"text" : {
		type: "text",
		text: "Please enter your query",
		isComplete:""
	},
	"dob":{
		type: "text",
		text: "Please enter DOB",
		isComplete:""
	}
]



export const onGetNextQuestion = (text) => {
	if(text){		
	  return (dispatch) => {
	   	dispatch(action.onRequestChat(questions[text]));
	  }
	}
}



