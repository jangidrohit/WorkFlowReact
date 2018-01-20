
import * as actionTypes from '../ActionTypes';

const initialObj = {
  maxRange:0,
  minRange:0,
  coins:[]
} 

const todos = (state = initialObj, action) => {
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
            //return rr;
    default:      
      return state
  }
}

export default todos