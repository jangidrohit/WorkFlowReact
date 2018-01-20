const initialObj = {
  maxRange:0,
  minRange:0,
  coins:[]
}

const todos = (state = initialObj, action) => {
  switch (action.type) {
    case 'CHANGE_RANGE':
      const change =
      {
        ...state,
        ...action
      }
      return change;

    case 'SAVE_RANGE':
      return {
        state,
        action
      }

    case 'GET_COINS' :
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