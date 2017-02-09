var path = require('path');
var webpack = require('webpack') ;
var HtmlwebpackPlugin = require('html-webpack-plugin');
var APP_PATH = path.resolve(__dirname, './src');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	name: 'testDemo',
	target: 'web',
	entry: [
		path.resolve(APP_PATH, "./index.js"),
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new OpenBrowserPlugin({
	      url: 'http://localhost:8080'
	    }),
		new HtmlwebpackPlugin({
			title:'饿了么网上订餐',
			template:path.resolve(APP_PATH,'./index.html'),
			filename:'index.html',
			// chunks 指定要引用entry文件中哪个几个入口个文件
			chunks:'app',
			// 表示script插入标签中
			inject:'body'
		})
	],
	resolve:{
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			loader: 'babel-loader',
			include: APP_PATH
		},{
			test: /\.html$/,
			loader: 'raw-loader',
			exclude: /node_modules/
		},{
				test: /\.css$/,
				loaders: ['style', 'css'],
				exclude: /(node_modules|bower_components)/
		},{
			test: /\.(png|jpe?g|gif)$/,
			loader: 'url-loader?limit=50000&name=imgs/[name].[ext]'
		},{
			test: /\.(woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=50000&name=fonts/[name].[ext]'
		}]
	}
}