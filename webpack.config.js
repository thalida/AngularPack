'use strict';

var webpack = require('webpack');
var path = require('path');

var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'app.coffee');

var APP = __dirname;

module.exports = {
	context: APP,
	entry: {
		app: mainPath
	},
	output: {
		path: buildPath,
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
            {
            	test: /\.coffee$/,
            	loader: "coffee-loader"
            },
            {
            	test: /\.(coffee\.md|litcoffee)$/,
            	loader: "coffee-loader?literate"
            },
            {
            	test: /\.html$/,
        		loader: 'ngtemplate?relativeTo=' + (path.resolve(__dirname, './app')) + '/!html'
            }
		]
	},
	resolve: {},
	plugins: [
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		})
	]
};
