define(['directives/module', 'lo-dash'], function(directives, _) {
	'use strict';


	directives.directive('innerDirective', innerDirective);

	function innerDirective() {
		return {
			restrict: 'A',
			template: '<div third-level-directive></div>{{page}}',
			scope: {
				page: '=',
				grandParent: '='
			},
			link: function(s, elem, attr){
				elem.on('click', function(e){
					console.log(this);
				});
			}
		};
	}
});