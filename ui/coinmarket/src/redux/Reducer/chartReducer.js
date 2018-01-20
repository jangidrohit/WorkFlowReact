
import * as actionTypes from '../ActionTypes';

const initialObj = {
  market_cap: 0,
  price_btc: 0,
  price_usd: 0,
  volume_usd: 0
} 

const chartData = (state = initialObj, action) => {
  switch (action.type) {
    case actionTypes.GRAPH_DATA:
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

export default chartData