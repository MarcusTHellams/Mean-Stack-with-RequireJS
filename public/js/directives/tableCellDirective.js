define(['directives/module', 'hbs!../../templates/tableCellDirective'], function(directives, tds) {
	'use strict';

	directives.directive('tableCellDirective', tableCellDirective);
	directives.directive('innerCellDirective', innerCellDirective);

	innerCellDirective.$inject = ['$compile'];

	function tableCellDirective() {
		return {
			restrict: 'A',
			scope: {
				options: '=tableCellDirective',
				column: '='
			},
			// templateUrl: 'templates/tableCellDirective.html',
			'template': '<td ng-repeat="def in options.columnDefinitions"><inner-cell-directive column=column options="options" definition="def"></inner-cell-directive</td>',
			link: function(s, ele, attr) {
				// console.log(s);
			}

		};
	}

	function innerCellDirective($compile) {
		return {
			restrict: 'E',
			scope: {
				definition: '=',
				column: '=',
				options: '='
			},
			'template': '<a href="javascript:void(0)" editable-text="column[definition.name]" onaftersave="save()">{{column[definition.name]}}</a>',
			link: function(s, ele, attr) {
				console.log(s.column);
				s.save = function(){
					console.log(s.definition);
				};
			}

		};
	}
});