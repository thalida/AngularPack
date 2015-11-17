'use strict'

# ==============================================================================
#
# 	View1 Route (/view1)
#
# ------------------------------------------------------------------------------

app.config([
	'$stateProvider'
	'$urlRouterProvider'
	($stateProvider, $urlRouterProvider) ->
		$stateProvider.state('base.view1', {
			url: '/view1'
			templateUrl: 'views/view1/view1.html'
			controller: 'View1Ctrl as view1'
		})
])
