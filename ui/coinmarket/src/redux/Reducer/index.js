import { combineReducers } from 'redux'
import home from './reducer'
import chart from './chartReducer'
import report from './reportReducer'

export default combineReducers({
  home,
  chart,
  report
})