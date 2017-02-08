
// 菜品分类配置
const menu = {
	0:{
		name:'全部商家',
		sub:[]
	},
	1:{
		name:'快餐便当',
		sub:{
			0:{ name:'全部快餐'}, // subid为0时的信息
			1:{ name:'便当'},
			2:{ name:'米粉'}
		}
	},
	2:{
		name:'特色菜系',
		sub:{
			0:{name:"全部特色菜系"},
			1:{name:"川湘菜"},
			2:{name:"西北菜"}
		}
	},
	3:{
		name:'异国料理',
		sub:{
			0: {name:'全部异国料理'},
			1: {name:'披萨'},
			2: {name: '意大利面'}
		}
	},
	4:{
		name:'小吃夜宵',
		sub:{
			0:{name:'全部小吃夜宵'},
			1:{name:"地方小吃"},
			2:{name:'炸鸡炸串'}
		}
	},
	5:{
		name:'甜品',
		sub: {
			0:{name:'全部甜品'},
			1:{name:'饮品'},
			2:{name:'甜品'}
		}
},
6: {
	name: '商店超市',
	sub: {
		0: {name: '全部商店超市'},
		1: {name: '酒品'},
		2: {name: '烟品'}
	}
}}

// 商家特征配置
const special = {
	0:{name:"准", desc:"准时必达，超时秒赔"},
	1:{name:'保', desc:'已加入"外卖宝"计划，食品安全有保障'},
	2:{name:'票', desc:'该商家支持开发票，请在订购时填写发票抬头信息'},
	3:{name:'新', desc:'新店开张，欢迎光临'}
}

// 店铺数据结构末班
const item = {
	id:999, //当前商家id
	catId:'1_1', // {主分类}_{子分类}
	title: "汉堡王（高新店）",
	splash:'图片地址',
	time:'45分钟+',
	rating:4.8, // 五星级
	sale: 2000, // 月售2000单
	fee: 4, // 配送费4元，0表示免费
	spec: [0,1,2,3], //0准，1包，2票，3新
	desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
}

// 所有商家数据
const items = {
	1:{
		catId:'1_1', // {主分类}_{子分类}
		title: "汉堡王（高新店）",
		splash: require('../assets/images/food/food1.png'),
		time:'12分钟',
		rating:3.7, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [2,3], //0准，1包，2票，3新
		brand: true, // 是否为品牌店
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	2: {
		catId:'1_2', // {主分类}_{子分类}
		title: "元祖食品",
		splash: require('../assets/images/food/food2.png'),
		time:'30分钟',
		rating:1, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,3], //0准，1包，2票，3新
		brand: true,
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	3: {
		catId:'2_1', // {主分类}_{子分类}
		title: "coco(卜蜂来莲花店)",
		splash: require('../assets/images/food/food3.png'),
		time:'45分钟+',
		rating:2.5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	4:{
		catId:'2_2', // {主分类}_{子分类}
		title: "鲜芋仙（西市店）",
		splash:require('../assets/images/food/food4.png'),
		time:'45分钟+',
		rating:4.4, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	5:{
		catId:'3_1', // {主分类}_{子分类}
		title: "yoyo私家口味虾",
		splash:require('../assets/images/food/food5.png'),
		time:'18分钟',
		rating:3.3, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	6: {
		catId:'3_2', // {主分类}_{子分类}
		title: "披萨来了（高新店）",
		splash:require('../assets/images/food/food6.png'),
		time:'45分钟+',
		rating:4.5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	7: {
		catId:'4_1', // {主分类}_{子分类}
		title: "泰熙家",
		splash:require('../assets/images/food/food7.png'),
		time:'45分钟+',
		rating:1.0, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	8: {
		catId:'4_2', // {主分类}_{子分类}
		title: "正宗黄焖鸡米饭",
		splash:require('../assets/images/food/food8.png'),
		time:'45分钟+',
		rating:5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	9: {
		catId:'5_1', // {主分类}_{子分类}
		title: "一品小厨",
		splash:require('../assets/images/food/food9.png'),
		time:'45分钟+',
		rating:2.5, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	10: {
		catId:'5_2', // {主分类}_{子分类}
		title: "小米串串",
		splash:require('../assets/images/food/food10.png'),
		time:'45分钟+',
		rating:3, // 五星级
		sale: 2000, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0,1,2,3], //0准，1包，2票，3新
		desc: '临近春节，即将关门，具体参考本店休假表' //商家对门面的描述
	},
	11: {
		catId:'1_1', // {主分类}_{子分类}
		title: "谷记粥铺",
		splash:require('../assets/images/food/food11.png'),
		time:'30分钟',
		rating:3.3, // 五星级
		sale: 20, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [0], //0准，1包，2票，3新
		desc: '谷记粥铺，好吃打不折。' //商家对门面的描述
	},
	12: {
		catId:'1_2', // {主分类}_{子分类}
		title: "成都平价川菜",
		splash:require('../assets/images/food/food12.png'),
		time:'15分钟',
		rating:4.5, // 五星级
		sale: 20, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [1,2], //0准，1包，2票，3新
		desc: '成都辣妹子的招待' //商家对门面的描述
	},
	13: {
		catId:'2_1', // {主分类}_{子分类}
		title: "24小时全餐",
		splash:require('../assets/images/food/food13.png'),
		time:'18分钟',
		rating:4.5, // 五星级
		sale: 384, // 月售2000单
		fee: 7, // 配送费4元，0表示免费
		spec: [], //0准，1包，2票，3新
		desc: '24小时供应，满足您任何时间的用餐需求。' //商家对门面的描述
	},
	14: {
		catId:'2_2', // {主分类}_{子分类}
		title: "清真坤坤菠菜面（高新路店）",
		splash:require('../assets/images/food/food14.png'),
		time:'15分钟',
		rating:4.5, // 五星级
		sale: 20, // 月售2000单
		fee: 4, // 配送费4元，0表示免费
		spec: [2], //0准，1包，2票，3新
		desc: '提供穆斯林的美味佳肴' //商家对门面的描述
	},
	15: {
		catId:'3_1', // {主分类}_{子分类}
		title: "霸王牛肉面·专业面食外卖",
		splash:require('../assets/images/food/food15.png'),
		time:'15分钟',
		rating:2, // 五星级
		sale: 2044, // 月售2000单
		fee: 10, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '霸王牛肉干面，带你走上王者之路' //商家对门面的描述
	},
	16: {
		catId:'3_2', // {主分类}_{子分类}
		title: "牛羊肉泡馍",
		splash:require('../assets/images/food/food16.png'),
		time:'15分钟',
		rating:5, // 五星级
		sale: 2044, // 月售2000单
		fee: 0, // 配送费4元，0表示免费
		spec: [], //0准，1包，2票，3新
		desc: '陕西正宗牛羊肉泡馍' //商家对门面的描述
	},
	17: {
		catId:'4_1', // {主分类}_{子分类}
		title: "小馋虫麻食（鱼化寨店）",
		splash:require('../assets/images/food/food17.png'),
		time:'15分钟',
		rating:3, // 五星级
		sale: 2044, // 月售2000单
		fee: 0, // 配送费4元，0表示免费
		spec: [0], //0准，1包，2票，3新
		desc: '满足小馋虫的一切要求' //商家对门面的描述
	},
	18: {
		catId:'4_2', // {主分类}_{子分类}
		title: "川之韵煎饼屋",
		splash:require('../assets/images/food/food18.png'),
		time:'15分钟',
		rating:3, // 五星级
		sale: 2044, // 月售2000单
		fee: 12, // 配送费4元，0表示免费
		spec: [1], //0准，1包，2票，3新
		desc: '带您领略川味煎饼的魅力' //商家对门面的描述
	},
	19: {
		catId:'5_1', // {主分类}_{子分类}
		title: "四季鲜饺子馆",
		splash:require('../assets/images/food/food19.png'),
		time:'15分钟',
		rating:5, // 五星级
		sale: 24, // 月售2000单
		fee: 13, // 配送费4元，0表示免费
		spec: [2], //0准，1包，2票，3新
		desc: '俗话说：好吃不过饺子，...' //商家对门面的描述
	},
	20: {
		catId:'5_2', // {主分类}_{子分类}
		title: "辣道（凉菜卤面）",
		splash:require('../assets/images/food/food20.png'),
		time:'45+分钟',
		rating:5, // 五星级
		sale: 244, // 月售2000单
		fee: 0, // 配送费4元，0表示免费
		spec: [3], //0准，1包，2票，3新
		desc: '独家秘制，纯天然无任何添加剂，吃死人不偿命' //商家对门面的描述
	}
}

export {menu,special,items};