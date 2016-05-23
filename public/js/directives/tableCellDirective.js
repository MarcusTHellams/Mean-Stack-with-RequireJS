define(['directives/module', 'hbs!../../templates/tableCellDirective'], function(directives, tds) {
	'use strict';

	directives.directive('tableCellDirective', tableCellDirective);

	function tableCellDirective() {
		return {
			restrict: 'A',
			scope: {
				options: '=tableCellDirective'
			},
			link: function(s,ele,attr){
				console.log(tds(s.options));
			}

		};
	}
});