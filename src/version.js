;(function( doc, win ) {

	'use strict';

	function module() {

	}

	var proto = module.prototype;

	proto.version = '@VERSION';


	console.log( new module().version )

})( document, window );