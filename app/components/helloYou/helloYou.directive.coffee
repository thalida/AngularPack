'use strict'

# ==============================================================================
#
# 	HelloYou Directive
# 		Implements the HelloYou element: <helloYou></helloYou>
#
# ------------------------------------------------------------------------------

app.directive 'helloYou', [
	'$rootScope'
	'$state'
	( $rootScope, $state ) ->
		restrict: 'E'
		templateUrl: 'components/helloYou/helloYou.html'
		scope: {}
		bindToController: {
			name: '@'
		}
		controllerAs: 'helloYou'
		controller: ['$element', '$attrs', ( $el, attrs ) ->
			console.log(this)
		]
]
