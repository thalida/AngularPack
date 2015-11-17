'use strict'

window.moment = require('moment')
require 'jquery'
require 'angular'

require './assets/styles/app.scss'

window.app = angular.module 'app', [
	require 'angular-animate'
	require 'angular-sanitize'
	require 'angular-ui-router'
]

app.config([
	'$stateProvider'
	'$urlRouterProvider'
	($stateProvider, $urlRouterProvider) ->
		$urlRouterProvider.otherwise('/')
])

require './components/components.collection.coffee'
require './views/views.collection.coffee'
