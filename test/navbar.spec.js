var expect = require('chai').expect;
var Nightmare = require('nightmare') ;

describe('测试导航条', ()=>{
	before(()=>{})
	after(()=>{})

	it('导航条文字测试', (done)=>{
		var nightmare = new Nightmare({show: true})
		nightmare
			.goto('http://localhost:8080/')
			.wait(1000)
			.evaluate(()=>{
				var navs = Array.from(document.querySelectorAll('.navbar__menu-item'));
				var navsText = navs.map((nav)=> nav.textContent); // 提取每个导航条目中的字符
				return navsText.toString();
			})
			.end()
			.then(text=>{
				expect(text).to.be.equal("首页,我的订单,加盟合作");
				done()
			})
	});

	it('导航条颜色测试', (done)=>{
		var nightmare = new Nightmare({show: true})
		nightmare
			.goto('http://localhost:8080/')
			.wait(1000)
			.evaluate(()=>{
				var navbar = document.querySelector('header');
				return getComputedStyle(navbar).backgroundColor;
			})
			.end()
			.then(color=>{
				expect(color).to.be.equal("rgb(30, 137, 224)");
				done()
			})
	})
})