import EventBus from 'angular-es-utils/event-bus';

import {menu} from '../../api/data';
class CatNav{
	constructor(){}
	$onInit(){
		this.menu = menu;
	}
	$postLink(){
		this.mainMenuId = 0;//默认选中全部分类
	}

	onClickMenu(id,subid=0){ // 默认全部分类，id为0
		this.mainMenuId = id ? id : this.mainMenuId;
		this.subMenuId = subid;

		this.currentMainMenu = menu[this.mainMenuId]; // 显示子分类
		this.currentMenuId = this.mainMenuId +'_'+ this.subMenuId; // 当前详细分类
		
		// 组件间通信
		EventBus.dispatch('cat_change', this.currentMenuId);
	}

}

export default {
	controller: CatNav,
	bindings:{},
	template:`
	<section class="nav-cat container clearfix">
		<span class="vendor-cat">商家分类：</span>
		<div class="cat-detail">
			<div class="main-cat">
				<a 
				ng-repeat="(id,mCat) in $ctrl.menu" 
				ng-class="{'main-cat-item': true,'main-cat-selected': $ctrl.mainMenuId == id}"
				class="main-cat-item" 
				href="javascript:;"
				ng-click="$ctrl.onClickMenu(id,subid)">{{mCat.name}}</a>
			</div>
			<div class="sub-cat"><a
				href="javascript:;" 
				ng-class="{'sub-cat-item':true, 'sub-cat-selected': $ctrl.subMenuId == subid}"
				ng-repeat="(subid,subCat) in $ctrl.currentMainMenu.sub"
				ng-click="$ctrl.onClickMenu(null, subid)">{{subCat.name}}</a>
			</div>
		</div>
	</section>
	`
}