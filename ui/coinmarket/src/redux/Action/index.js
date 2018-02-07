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

export const onGetReportData = reportData => {
  return {
    type: actionTypes.REPORT_DATA,
    reportData
  }
}

export const onChat = chatData => {
  debugger;
  return {
    type: actionTypes.CHAT_DATA,
    chatData
  }
}

export const onRequestChat = chatData => {
  debugger;
  return {
    type: actionTypes.SENDER_CHAT,
    chatData
  }
}


export const onRequestQues = receiveChat => {
  debugger;
  return {
    type: actionTypes.RECEIVE_CHAT,
    receiveChat
  }
}

export const onQues = question => {
  debugger;
  return {
    type: actionTypes.QUESTION,
    question
  }
}


