define(['directives/module'], function(directives) {
	'use strict';


	directives.directive('outterDirective', outterDirective);

	function outterDirective() {
		return {
			restrict: 'A',
			replace:  true,
			template: '<ul><div inner-directive ng-repeat="page in dropDownPagination track by $index" page="page"></div></ul>'
		};
	}
});