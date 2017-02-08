class Navbar{
	constructor(){}
	$onInit(){}
}

export default {
	controller: Navbar,
	bindings:{},
	template:`
		<header class="header">
			<nav class="navbar container">
				<a class="logo" href="#">Logo图片</a>
				<ul class="navbar__menu">
					<li><a class="navbar__menu-item" href="#">首页</a></li>
					<li><a class="navbar__menu-item" href="#">我的订单</a></li>
					<li><a class="navbar__menu-item" href="#">加盟合作</a></li>
				</ul>
				<div class="navbar-tips">
					<a href="#" class="navbar-tips__item"><i class="iconfont">&#xe68e;</i>服务中心</a href="#">
					<a href="#" class="navbar-tips__item"><i class="iconfont">&#xe604;</i>手机应用</a href="#">
					<a href="#" class="navbar-tips__login"><i class="iconfont">&#xe6cb;</i>登录/注册</a href="#">
				</div>
			</nav>
		</header>
	`
}