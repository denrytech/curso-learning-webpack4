const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm
const UglifyJSPlugin = require("uglifyjs-webpack-plugin"); // installed via npm
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const webpack = require('webpack'); // to access built-in plugins

module.exports = {
	entry: {
		index: "./src/index.js",
		about: "./src/about.js",
		contact: "./src/contact.js",
		navbar: "./src/navbar.js"
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: 'vendors'
		},
		minimizer: [new UglifyJSPlugin({
			uglifyOptions: {
				output: {
				  comments: false,
				}
			}
		})]
	},
	plugins: [
		new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
			chunks: ['vendors', 'index', 'navbar'],
			minify: {
				minifyCSS: true,
	        	minifyJS: true,
    	    	removeComments: true,
        		collapseWhitespace: true,
        		preserveLineBreaks: false
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'about.html',
			template: './src/about.html',
			chunks: ['vendors', 'about', 'navbar'],
			minify: {
				minifyCSS: true,
	        	minifyJS: true,
    	    	removeComments: true,
        		collapseWhitespace: true,
        		preserveLineBreaks: false
			}
		}),
		new HtmlWebpackPlugin({
			filename: 'contact.html',
			template: './src/contact.html',
			chunks: ['vendors', 'contact', 'navbar'],
			minify: {
				minifyCSS: true,
	        	minifyJS: true,
    	    	removeComments: true,
        		collapseWhitespace: true,
        		preserveLineBreaks: false
			}
		})
	],
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