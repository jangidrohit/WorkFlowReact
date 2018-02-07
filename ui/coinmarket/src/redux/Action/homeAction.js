import * as appConfig from '../../Config/Config';
import * as action from '../Action';
import { RSAA } from 'redux-api-middleware'; // RSAA = '@@redux-api-middleware/RSAA'

var chatJson = {
  text: "Hi, What I can do for you ?",
  type: "text"
}
 
export const onSaveRangeAct = (data) => {
  return (dispatch) => {
    fetch(`${appConfig.default.apiRoute}/range`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then((response, b) => {
        dispatch(action.onSave(response));
    })
    .catch((error) => {
        console.log(error)
    })
  }
}

export const onGetCoinDetails = (coins) => {
  debugger;
  return (dispatch) => {
     fetch(`${appConfig.default.apiRoute}/coins`, {
      method: 'GET',
    })
    .then((res)=> {
      return res.json();      
    })
    .then(function(res){
      dispatch(action.onGetCoinsData(res.result));
    })
    .catch((err)  => {
      console.log(err)
    })
  } 
}


export const onChatStart = () => {
  debugger;
  return (dispatch) => {
    dispatch(action.onRequestChat(chatJson));
  }
}