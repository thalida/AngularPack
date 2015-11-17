'use strict'

# ==============================================================================
#
# 	{{Demo}} Route (/{{demo}})
#
# ------------------------------------------------------------------------------

app.config([
	'$stateProvider'
	'$urlRouterProvider'
	($stateProvider, $urlRouterProvider) ->
		$stateProvider.state('base.{{demo}}', {
			url: '/{{demo}}'
			templateUrl: 'views/{{demo}}/{{demo}}.html'
			controller: '{{Demo}}Ctrl as {{demo}}'
		})
])
