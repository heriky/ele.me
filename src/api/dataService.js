import {items} from './data';
import injector from 'angular-es-utils/injector';

const TIMEOUT = 2000 ;

// 使用浏览器内置setTimout无法刷新数据
function fetchVendors(start=1,limit=12){ // 数据起始id和数据个数限制, 后期进行Object.assign合并
	var $timeout =  injector.get('$timeout');
	return $timeout(()=>{
		var rs = {};
		for(var i=start; i<=start+limit-1; i++){
			if (items[i] == null) { break; } // 每轮加载12条数据，当数据剩余小于12条，则跳过剩余的
			rs[i] = items[i]
		}
		return rs;
	}, TIMEOUT);
}

export {fetchVendors};
