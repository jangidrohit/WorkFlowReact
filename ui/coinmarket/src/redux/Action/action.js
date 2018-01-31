import * as appConfig from '../../Config/Config';


export const onChangeRange = data => {
  return {
    type: 'CHANGE_RANGE',
    ...data
  }
}

export const onSave = data => {
  return {
    type: 'SAVE_RANGE',
    data
  }
}

export const onGetCoinsData = coins => {
  return {
    type: 'GET_COINS',
    coins
  }
}

export const navigateToChart = detail => {
  return {
    type: 'GRAPH_DETAIL',
    detail
  }
}

export const onSaveRangeAct = (data) => {
    return (dispatch) => {
        //dispatch(onSave())
        fetch(`${appConfig.default.apiRoute}/range`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then((response, b) => {
            dispatch(onSave(response));
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const navigateToChartAct = (data) => {
    return (dispatch) => {
        //dispatch(onSave())
        
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
      dispatch(onGetCoinsData(res.result));
    })
    .catch((err)  => {
      console.log(err)
    })
  } 
}