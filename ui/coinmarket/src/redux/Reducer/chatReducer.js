
import * as actionTypes from '../ActionTypes';

const chatJson = {
  text:"",
  type:""
} 

const onChatData = (state = chatJson, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.SENDER_CHAT:
      const change =
      {
        ...state,
        ...action
      }
      return change;

    default:      
      return state;
  }
}

export default onChatData