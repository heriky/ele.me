
class Sidebar{
	constructor(){}
	$onInit(){}
	$onDestroy(){
		clearInterval(this.timer);
	}

	/**
	 * 滚动至顶部。在向上滚动时，未做屏蔽处理
	 * @return {[type]} [description]
	 */
	backtop(){
		var current = document.body.scrollTop ;
		this.timer = setInterval(()=>{
			if (current <=0) {
				clearInterval(this.timer);
			}else{
				document.body.scrollTop = current ;
				if (current >=20) {
					current -= 20;
				}else{
					current = 0 ;
				}
			}
		},1)
	}
}

export default {
	controller: Sidebar,
	bindings:{},
	template: `
		<div class="sidebar">
			<div href="javascript:;" class="sidebar-order"><i class="iconfont">&#xe637;</i><span class="sidebar-tip">我的订单</span></div>
			<div href="javascript:;" class="sidebar-cart"><i class="iconfont"><span style="font:16px Microsoft YaHei,sans-serif">购物车</span>&#xe622;</i></div>
			<div href="javascript:;" class="sidebar-mail"><i class="iconfont">&#xe62f;</i><span class="sidebar-tip">我的信息</span></div>
			<div href="javascript:;" class="sidebar-qrcode"><i class="iconfont">&#xe72c;</i>
				<div class="sidebar-qrcode__content">
					<img src="${require('./assets/images/app-qrcode.png')}">
					<a href="#">下载手机应用</a>
					<a href="#">即可参加红包分享活动</a>
				</div>
			</div>
			<div href="javascript:;" class="sidebar-service"><i class="iconfont">&#xe68e;</i><span class="sidebar-tip">在线客服</span></div>
			<div href="javascript:;" class="sidebar-backtop" ng-click="$ctrl.backtop()"><i class="iconfont">&#xe696;</i></div>
		</div>
	`
}