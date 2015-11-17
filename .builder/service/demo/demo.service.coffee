'use strict'

# ==============================================================================
#
# 	{{Demo}} Service
# 		Implements the {{Demo}} class
#
# ------------------------------------------------------------------------------

app.service '{{demo}}', [
	'$rootScope'
	'$state'
	( $rootScope, $state ) ->
		class {{Demo}}
			# constructor: Inital class setup
			# ------------------------------------------------------------------
			constructor: ( @param1, opts ) ->
				console.log( @, @param1 )
				return

			# _privateMethod: Faux private method
			# ------------------------------------------------------------------
			_privateMethod: () -> return

			# publicMethod: Public method
			# ------------------------------------------------------------------
			publicMethod: () -> return

]
