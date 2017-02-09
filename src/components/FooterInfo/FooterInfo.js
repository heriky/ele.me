import weixinqc from './assets/images/wexinqc.png';
import copyright from './assets/images/copyright.png';

class FooterInfo{
	constructor(){}
	$onInit(){}
}

export default {
	controller: FooterInfo,
	bindings: {},
	template: `
		<footer class="footer">
		<div class="container">
			<div class="footer-link">
				<div class="footer-link-item">
					<h3>用户帮助</h3>
					<a href="">服务中心</a>
					<a href="">常见问题</a>
					<a href="">在线客服</a>
				</div>
				<div class="footer-link-item">
					<h3>商务合作</h3>
					<a href="">我要开店</a>
					<a href="">加盟指南</a>
					<a href="">市场合作</a>
					<a href="">开放平台</a>
				</div>
				<div class="footer-link-item">
					<h3>关于我们</h3>
					<a href="">饿了么介绍</a>
					<a href="">加入我们</a>
					<a href="">联系我们</a>
					<a href="">规则中心</a>
				</div>
				<div class="footer-link-item">
					<p class="tel">24小时客服热线 : 10105757</p>
					<p class="feddback">意见反馈 : feedback@ele.me</p>
					<div class="follow">
						<span>关注我们:</span>
						<div class="weixin">
							<div class="dropbox">
								<img src="${weixinqc}" alt="" class="weixinqc">
								<p>微信号:elemeorder</p>
								<p>饿了么网上订餐</p>
							</div>
						</div>
						<div class="weibo"></div>
					</div>
				</div>
				<div>
					<a href="#" class="footer-qrcode"><img src="${weixinqc}" alt=""></a>
					<div class="footer-qrcode-info">
						<h3>下载手机版</h3><p>扫一扫,手机订餐方便</p>
					</div>
				</div>
			</div>
			<div class="footer-info">
				<p class="owner">所有方：上海拉扎斯信息科技有限公司</p>
				<p class="copyright">增值电信业务许可证 : 沪B2-20150033 | 沪ICP备 09007032 | 上海工商行政管理 Copyright ©2008-2016 ele.me, All Rights Reserved.</p>
				<img class="copyright-img" src="${copyright}" alt="">
			</div>
		</div>
	</footer>
	`
}