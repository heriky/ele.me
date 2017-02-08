module.exports = ()=>{
	// 浏览器窗口变化
	window.addEventListener('visibilitychange', ()=>{
		var isHidden = document.hidden;
		document.title = !isHidden ? '饿了么网上订餐':'记得回来点餐 - 饿了么网上订餐'
	}, false);

	// 默认点击全部商品分类
	
}