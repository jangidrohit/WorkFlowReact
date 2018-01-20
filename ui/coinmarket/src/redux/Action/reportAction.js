
import * as appConfig from '../../Config/Config';
import * as action from '../Action';

export const onGetReport = (report) => {
  return (dispatch) => {
		fetch(`${appConfig.default.apiRoute}/report`, {
			method: 'GET',
		})
		.then((res)=> {
			return res.json();
		})
		.then(function(res){
			dispatch(action.onGetReportData(res.result));
		})
	} 
}