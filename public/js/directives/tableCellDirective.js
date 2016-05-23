define(['directives/module'], function(directives) {
	'use strict';


	directives.directive('tableCell', tableCell);

	function tableCell() {
		return {
			restrict: 'E',
			replace: true,
			templateUrl: 'templates/tableCellDirective.html'
		};
	}
});