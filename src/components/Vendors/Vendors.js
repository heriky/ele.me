import EventBus from 'angular-es-utils/event-bus';

import {special,items} from '../../api/data';
import {fetchVendors} from '../../api/dataService'

// items表示页面当前过滤到的数据，cache表示当前缓存的所有数据, items来自于对cache的处理
class Vendors{
	constructor(){}
	$onInit(){
		this.loadingMore = false; // 标记“加载更多”功能运行状态
		this.loading = true; // 标记商家数据加载状态(进度条)
		this.special = special; // 商家特征标记

		this.deregister  = EventBus.on('cat_change', (catId)=>{
			console.log('接收到菜单过滤事件')
			this.items = this.filterItems(catId);
		})

		this.deregisterX = EventBus.on('search', (keyword)=>{
			console.log('接收到搜索事件')
			var rs = {};
			for(var id in this.cache){
				if (new RegExp(keyword,'i').test(this.cache[id].title)) {
					Object.assign(rs, {id: this.cache[id]})
				}
			}
			this.items = rs ;
		})
	}

	$postLink() {
		fetchVendors().then(data=>{
			this.cache = this.items = data;
			this.loading = false;
		}).catch(err=>{throw new Error('错误的数据请求')});
  }

	/**
	 * 按照具体分类id筛选数据
	 * @param  {[type]} catId [description]
	 * @return {[type]}       [description]
	 */
	filterItems(catId){
		// 全部商品
		if (catId.startsWith('0')) {
			// return items;
			return this.cache;
		}

		// 主分类下的全部分类
		const [mainId, subId] = catId.split('_');
		var rs = [];
		if (subId == 0) { 
			for(var id in this.cache){
				if (this.cache[id].catId.startsWith(mainId)){
					rs.push(this.cache[id]);
				}
			}
			return rs;
		}

		// 主分类下的详细子分类
		for(var id in this.cache){
			if (this.cache[id].catId === catId) {
				rs.push(this.cache[id]);
			}
		}
		return rs;
	}

	//加载更多功能
	loadMore(){
		this.loadingMore = true;
		var count = Object.keys(this.items).length;
		fetchVendors(count+1, 12).then(data=>{
			this.cache = this.items = Object.assign({}, this.items, data); // 更新总量缓存
			this.loadingMore = false;
		}).catch(err=>{ throw new Error('加载更多，错误！')})
	}

	$onDestory(){
		this.deregister();
		this.deregisterX();
	}
}
export default {
	controller: Vendors,
	bindings: {},
	template: `
	<section class="empty-vendor container" ng-if="$ctrl.items.length==0">
		<div class="v"></div>
		<figure class="empty-container">
		  <img class="empty-indicator" src="${require('./assets/images/empty.png')}" width="100" height="86" />
		  <figcaption class="empty-desc">附近没有符合条件的商家，换个筛选条件试试吧</figcaption>
		</figure>
	</section>
	<section class="main-food container" ng-if="$ctrl.items.length!=0">
			<a href="#" class="main-food__item" ng-repeat="(id, item) in $ctrl.items">
				<div class="main-food__container">
					<div class="food-item__splash">
						<div class="brand" ng-if="item.brand"></div>
						<img src="{{item.splash}}">
						<span ng-class="{'time-cost': true, 'red': item.time.startsWith('45')}">{{item.time}}</span>
					</div><div class="food-item__detail">
						<h4 class="food-item__title">{{item.title}}</h4>
						<span class="food-item__rating">
							<i class="iconfont">&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</i>
							<i class="iconfont star-yellow" style="width:{{item.rating/5*60}}px">&#xe600;&#xe600;&#xe600;&#xe600;&#xe600;</i>
						</span>
						<span class="sale">月售{{item.sale}}单</span>
						<div></div>
						<div class="fee">配送费{{item.fee}}元</div>
						<div class="act">
							<!--<i class="zhun">准</i><i class="bao">保</i><i class="piao">票</i><i class="xin">新</i>-->
							<i ng-class="{'zhun': sp==0, 'bao': sp==1, 'piao': sp==2, 'xin':sp==3 }" ng-repeat="sp in item.spec">{{$ctrl.special[sp].name}}</i>
						</div>
					</div>
				</div>
				<div class="tooltip" >
					<h3 class="tooltip-title">{{item.title}}</h3>

					<p ng-class="{'tooltip-zhun': sp==0, 'tooltip-bao': sp==1, 'tooltip-piao': sp==2, 'tooltip-xin':sp==3 }"  ng-repeat="sp in item.spec">
						<i ng-class="{'zhun': sp==0, 'bao': sp==1, 'piao': sp==2, 'xin':sp==3 }">{{$ctrl.special[sp].name}}</i>
						{{$ctrl.special[sp].desc}}
					</p>
					<div class="tooltip-basic">
						<span class="tooltip-fee">配送费{{item.fee}}元</span><span class="tooltip-time">平均44+分钟送达</span>
					</div>
					<p class="tooltip-desc">
						{{item.desc}}
					</p>
				</div>
			</a>
			<!--首屏加载12条数据-->
			<div class="load-more" ng-if="$ctrl.items[12]" ng-click="$ctrl.loadMore()" ng-show="!($ctrl.loadingMore)">点击加载更多商家...</div>
			</section>
			<div class="loading-container container" ng-if="$ctrl.loading || $ctrl.loadingMore">
				<div class="loading-indicator">
					<img src="${require('./assets/images/loading.png')}"  alt="" />
				</div>
				<div class="loading-desc">正在载入更多商家...</div>
			</div>
	`
}