var path = require('path');

var gulp = require("gulp");
var gutil = require("gulp-util");
var modify = require('gulp-modify');
var rename = require('gulp-rename');

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var yargs = require('yargs');



var escapeRegExp = function (str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

var replaceAll = function (str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

var capsFirstChar = function( str ){
    return str.charAt(0).toUpperCase() + str.slice(1);
};

var create = {
	config: {
		req: "require './{{demo}}/{{demo}}.collection.coffee'",
		view: {
			demoDir: '.builder/view/demo',
			distDir: 'app/views',
			collection: 'app/views/views.collection.coffee',
		},
		directive: {
			demoDir: '.builder/directive/demo',
			distDir: 'app/components',
			collection: 'app/components/components.collection.coffee',
		},
		service: {
			demoDir: '.builder/service/demo',
			distDir: 'app/components',
			collection: 'app/components/components.collection.coffee',
		}
	},

	run: function( type, name ){
		var config = create.config[type];
		create.renameFiles( name, config );
		create.addToCollection( name, config );

		console.log( 'Created a new', type, 'collection named', name );
	},

	renameFiles: function( name, config ){
		gulp.src( config.demoDir + '/*')
			.pipe(modify({
				fileModifier: function(file, contents) {
					contents = replaceAll(contents, '{{demo}}', name);
					contents = replaceAll(contents, '{{Demo}}', capsFirstChar(name));
					return contents;
				}
			}))
			.pipe(rename(function( path ){
				path.basename = replaceAll(path.basename, 'demo', name);
			}))
			.pipe(gulp.dest( path.join(config.distDir, '/', name) ));
	},

	addToCollection: function( name, config ){
		var requireTxt = create.config.req;

		gulp.src( config.collection )
			.pipe(modify({
				fileModifier: function(file, contents) {
					contents += replaceAll(requireTxt, '{{demo}}', name) + '\n'
					return contents;
				}
			}))
			.pipe(gulp.dest( config.distDir ));
	}
};



gulp.task("webpack:build", function(callback) {
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("webpack:server", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(myConfig), {
		publicPath: myConfig.output.publicPath,
		hot: true,
		quiet: false,
		noInfo: true,
		stats: {
			colors: true
		}
	}).listen(8000, "0.0.0.0", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8000/webpack-dev-server/index.html");
	});
});

gulp.task("app:create", function(){
	var argv = yargs
				.usage('Usage: gulp create [options]')

				.options({
					't': {
						alias: 'type',
						demand: true,
						describe: 'Choose a folder structure',
						type: 'string',
						choices: ['view', 'directive', 'service'],
						requiresArg: true
					},
					'n': {
						alias: 'name',
						demand: true,
						describe: 'Name for the new structure',
						type: 'string',
						requiresArg: true
					}
				})

				.help('h')
				.alias('h', 'help')

				.strict()

				.argv;

	create.run( argv.type, argv.name );
});

// The development server (the recommended option for development)
gulp.task("default", ["webpack:server"]);

// Production build
gulp.task("build", ["webpack:build"]);

// Production build
gulp.task("create", ["app:create"]);
