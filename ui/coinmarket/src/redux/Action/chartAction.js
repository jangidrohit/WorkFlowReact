
import * as appConfig from '../../Config/Config';
import * as action from '../Action';
import _ from 'lodash';

// export const onGetCoinData = (match) => {
// 	var name = (match.params.name.split(' ')).join('-');
// 	fetch(`${appConfig.default.chartApi}${name}`, { method: 'GET'})
// 	  .then(response => response.json())
// 	  .then(res =>{
//             var market_cap = _.map(res.market_cap_by_available_supply,function(data){
//                 return { x:new Date(data[0]),  y:data[1] }
//             });
//             var price_btc = _.map(res.price_btc,function(data){
//                 return { x:new Date(data[0]), y:data[1] }
//             });
//             var price_usd = _.map(res.price_usd,function(data){
//                return  { x:new Date(data[0]), y:data[1] }
//             });
//             var volume_usd = _.map(res.volume_usd,function(data){
//                 return { x:new Date(data[0]), y:data[1] }
//             });

//             var graphData = {
//             	market_cap : market_cap,
//             	price_btc: price_btc,
//             	price_usd: price_usd,
//             	volume_usd: volume_usd
//             }

//             return (dispatch) => {
//             	dispatch(action.onGetCoin(graphData))
//             }
//         })
//             //
//       .catch((err) => {
//         console.log(err)
//       })
  }