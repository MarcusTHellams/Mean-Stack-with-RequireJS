define(['directives/module'], function(directives) {
	'use strict';


	directives.directive('pagination', Pagination);

	function Pagination() {
		return {
			restrict: 'A',
			replace:  true,
			templateUrl: 'templates/paginationDirective.html'
		};
	}
});