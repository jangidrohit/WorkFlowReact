import * as appConfig from '../../Config/Config';
import * as action from '../Action';

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