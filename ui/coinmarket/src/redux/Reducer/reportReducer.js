
import * as actionTypes from '../ActionTypes';

const initialObj = {
  reportData : 0
}

const reportReducer = (state = initialObj, action) => {
  debugger;
  switch (action.type) {
    case actionTypes.REPORT_DATA:
      const change =
      {
        ...state,
        ...action
      }
      return change;
    default:      
      return state
  }
}

export default reportReducer