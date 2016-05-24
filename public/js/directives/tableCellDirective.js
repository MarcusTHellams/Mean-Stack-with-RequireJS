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
			'template': '<td ng-inculde="templates/tableCellDirective.html" ng-repeat="def in options.columnDefinitions"><inner-cell-directive column=column options="options" definition="def"></inner-cell-directive</td>',
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
			'template': '<span>{{column[definition.name]}}</span>',
			link: function(s, ele, attr) {
				var oldText = ele.html();
				console.log(oldText);
				var input = $('<input />').attr('ng-model', s.column[s.definition.name]);
				input = '<div class="form-group">' +
					'<label class="sr-only" for=""></label>' +
					'<input type="text" class="form-control" id="" ng-model="column[definition.name]">' +
					'</div>';
				ele.one('dblclick', swapTextForInput);

				function swapTextForInput(e) {
					$compile(input)(s, function(cloned, s) {
						ele.html(cloned);
					});

					ele.find(':input').one('blur focusout', function(e) {
						$compile(oldText)(s, function(cloned, s) {
							console.log(cloned);
							ele.html(cloned);
						});

					});
				}
			}

		};
	}
});