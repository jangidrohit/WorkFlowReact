import { combineReducers } from 'redux';
import home from './reducer';
import chart from './chartReducer';
import report from './reportReducer';
import chat from './chatReducer';

export default combineReducers({
  home,
  chart,
  report,
  chat
})