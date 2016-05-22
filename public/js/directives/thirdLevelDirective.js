define(['directives/module', 'lo-dash'], function(directives, _) {
	'use strict';


	directives.directive('thirdLevelDirective', thirdLevelDirective);

	function thirdLevelDirective() {
		return {
			restrict: 'A',
			replace: true,
			template: '<span>Hello</span>'
		};
	}
});