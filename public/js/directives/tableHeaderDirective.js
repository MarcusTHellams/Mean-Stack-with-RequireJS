define(['directives/module'], function(directives) {
	'use strict';


	directives.directive('tableHeader', tableHeader);

	function tableHeader() {
		return {
			restrict: 'A',
			replace:  true,
			templateUrl: 'templatestableHeaderDirective.html'
		};
	}
});