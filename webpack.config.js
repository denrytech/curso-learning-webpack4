const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		minimizer: [new UglifyJSPlugin()]
	},
	plugins: [new HtmlWebpackPlugin({
		filename: 'index.html',
		template: 'src/index.html'
	})],
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{loader: 'url-loader'}
				]
			}
		]
	}
}