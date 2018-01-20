import * as actionTypes from '../ActionTypes';


//Home Action Type 

export const onChangeRange = data => {
  return {
    type: actionTypes.CHANGE_RANGE,
    ...data
  }
}

export const onSave = data => {
  return {
    type: actionTypes.SAVE_RANGE,
    data
  }
}

export const onGetCoinsData = coins => {
  return {
    type: actionTypes.GET_COINS,
    coins
  }
}

export const navigateToChart = detail => {
  return {
    type: actionTypes.GRAPH_DETAIL,
    detail
  }
}


//Chart Action
export const onGetCoin = graphData => {
  return {
    type: actionTypes.GRAPH_DATA,
    graphData
  }
}


//Report



export const onGetReportData = graphData => {
  return {
    type: actionTypes.REPORT_DATA,
    graphData
  }
}


