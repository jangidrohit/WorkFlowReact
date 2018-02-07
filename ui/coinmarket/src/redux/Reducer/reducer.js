
import * as actionTypes from '../ActionTypes';

const initialObj = {
  maxRange:0,
  minRange:0,
  coins:[],
  chatData: [],
  messages:[],
  question:""
} 

const todos = (state = initialObj, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.CHANGE_RANGE:
      const change =
      {
        ...state,
        ...action
      }
      return change;

    case actionTypes.SAVE_RANGE:
      return {
        state,
        action
      }

    case actionTypes.GET_COINS :
      const coins =
      {
        ...state,
        ...action
      }
      return coins;

    case actionTypes.CHAT_DATA:
      const chat = {
        ...action
      }
      return chat;

    case actionTypes.SENDER_CHAT:
      const message =
      {
        ...state,
        ...action
      }
      return  message;

     case actionTypes.RECEIVE_CHAT:{
      const rece = {
        ...state,
        ...action
      }
      return rece;
    }

     case actionTypes.QUESTION :{
      const ques = {
        ...state,
        ...action
      }
      return ques;
     }

     
    default:      
      return state;
  }
}

export default todos