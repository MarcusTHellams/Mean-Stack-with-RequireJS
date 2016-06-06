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
			'template': '<div tabindex="0" ng-bind-html="column[definition.name] | uri" data-rendered></div> <div class="hidden" data-input class="form-group">' +
				'<label class="sr-only" for=""></label>' +
				'<input type="text" class="form-control" id="" ng-model="column[definition.name]" ng-model-options="{updateOn: \'blur\'}">' +
				'</div>',
			link: function(s, ele, attr) {
				var oldText = ele.html();
				var input = $('<input />').attr('ng-model', s.column[s.definition.name]);
				ele.find('[data-rendered]').on('click focus', swapTextForInput);
				ele.find('[data-input] :input').on('blur', swapTextForInput);

				console.log(findPatriarch(s));

				s.$emit('annouceYourSelf');


				function swapTextForInput(e) {

					ele.find('[data-rendered], [data-input]').toggleClass('hidden');
					ele.find('[data-input] :input').focus();
				}

				function findPatriarch(scope){
					if(!scope.$parent){

						return scope;
					} else {
						findPatriarch(scope.$parent);
					}
				}
			}

		};
	}
});