define(['directives/module', 'lo-dash'], function(directives, _) {
	'use strict';


	directives.directive('innerDirective', innerDirective);

	function innerDirective() {
		return {
			restrict: 'A',
			replace: true,
			template: '<li>{{page}}</li>',
			scope: {
				page: '='
			},
			link: function(s, elem, attr){
				console.log(s.page ++);
				elem.on('click', function(e){
					console.log(elem[0]);
				});
			}
		};
	}
});