import * as appConfig from '../../Config/Config';
import * as action from '../Action';

var questions = {
	number : {
		type: "number",
		text: "Please enter mobile number"
	}
}


export const onGetNextQuestion = (text) => {
	if(text){
	  return (dispatch) => {
	   	dispatch(action.onRequestChat(questions[text]));
	  }
	}
}



