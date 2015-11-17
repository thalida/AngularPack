'use strict'

# ==============================================================================
#
# 	{{Demo}} Directive
# 		Implements the {{Demo}} element: <{{demo}}></{{demo}}>
#
# ------------------------------------------------------------------------------

app.directive '{{demo}}', [
	'$rootScope'
	'$state'
	( $rootScope, $state ) ->
		restrict: 'E'
		templateUrl: 'components/{{demo}}/{{demo}}.html'
		scope: {}
		bindToController: {
			###
			twowaybound: '='
			onewaybound: '@'
			functionbound: '&'
			renamed: '=oldname'
			option: '=?'
			###
		}
		controllerAs: '{{demo}}'
		controller: ['$element', '$attrs', ( $el, attrs ) ->
			console.log(this)
		]
]
