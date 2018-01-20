
import * as actionTypes from '../ActionTypes';

var initialObj = {

}

const report = (state = initialObj, action) => {
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

export default report