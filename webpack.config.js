const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'development';
console.log('NODE_ENV:', env);

var	plugins = [new HtmlWebpackPlugin({
  			template: 'src/index.html',
  			filename: 'index.html',
  			inject: 'body'
			})
			]
if (env === 'production') {
plugins.push(
    new webpack.optimize.UglifyJsPlugin(),
    new OptimizeJsPlugin({
      sourceMap: false
    })
  );
}

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build/lukaszplac.github.io"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [
		{
		  	test: /\.js$/,
		  	loader: 'babel-loader',
		  	exclude: /node_modules/
		},
		{
      test: /\.(scss)$/,
      exclude: [/node_modules/],
      use: [{
              loader: "style-loader" // creates style nodes from JS strings
            	},
            	{
              loader: "css-loader", // translates CSS into CommonJS
            	    options: {
                  modules: true,
                  exclude: [/index.css/],
                  localIdentName: "[name]__[local]___[hash:base64:5]"
                }
            	},
            	{
              loader: "sass-loader" // compiles Sass to CSS
            	}]
    },
    {
      test: /\.(css)$/,
      use: [{
              loader: "style-loader" // creates style nodes from JS strings
              },
              {
              loader: "css-loader", // translates CSS into CommonJS
                  options: {
                  modules: false
                }
              }]
    },
    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
    }
	]},
	plugins: plugins,
  devtool: "source-map"
}
