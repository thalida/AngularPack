'use strict'

app.config([
	'$stateProvider'
	'$urlRouterProvider'
	($stateProvider, $urlRouterProvider) ->
		$stateProvider.state('base', {
			url: ''
			templateUrl: 'views/base/base.html'
			controller: 'BaseCtrl as base'
			abstract: true
		})

		$urlRouterProvider.when( '/', '/home' )
])
