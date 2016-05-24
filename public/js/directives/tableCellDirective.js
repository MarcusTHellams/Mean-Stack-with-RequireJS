define(['directives/module', 'hbs!../../templates/tableCellDirective', 'lo-dash'], function(directives, tds, _) {
	'use strict';

	directives.directive('tableCellDirective', tableCellDirective);

	function tableCellDirective() {
		return {
			restrict: 'A',
			scope: {
				options: '=tableCellDirective',
				column: '='
			},
			// templateUrl: 'templates/tableCellDirective.html',
			'template':'<td ng-inculde="templates/tableCellDirective.html" ng-repeat="def in options.columnDefinitions">{{column[def.name]}}</td>',
			link: function(s, ele, attr) {
				console.log(s);
			}

		};
	}
});