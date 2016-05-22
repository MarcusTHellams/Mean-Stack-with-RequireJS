define(['directives/module'], function(directives) {
	'use strict';


	directives.directive('tableHeader', tableHeader);

	function tableHeader() {
		return {
			restrict: 'A',
			templateUrl: 'templates/tableHeaderDirective.html',
			scope: {
				column: '=options'
			}
		};
	}
});