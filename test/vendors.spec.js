var expect = require('chai').expect;
var Nightmare = require('nightmare') ;
var fork = require('child_process').fork;
var path = require('path');
describe('测试商家数据', ()=>{
	var child;
	before((done)=>{
		child = fork(path.resolve(__dirname, '../server.js'))
		child.on('message', msg=>{
			if (msg === 'listening') {
				done();
			}
		})
	});
	after((done)=>{
		child.kill();
		done();
	});

	it('首屏数据测试', done=>{
		var nightmare = new Nightmare({show: false});
		nightmare
			.goto('http://localhost:3000/')
			.wait(4000)
			.evaluate(()=>{
				return document.querySelectorAll('.main-food__item').length;
			})
			.end()
			.then(count=>{
				expect(count).to.be.equal(12); // 首屏数据加载12条
				done();
			})
	});

	it('加载更多功能测试', done=>{
		var nightmare = new Nightmare({show: false});
		nightmare
			.goto('http://localhost:3000/')
			.wait(4000)
			.click('.load-more')
			.wait(4000)
			.evaluate(()=>{
				return document.querySelectorAll('.main-food__item').length;
			})
			.end()
			.then(count=>{
				expect(count).to.be.equal(20); // 首屏数据加载12条
				done();
			})
	})
})