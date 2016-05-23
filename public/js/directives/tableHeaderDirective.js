define(['directives/module'], function(directives) {
	'use strict';


	directives.directive('tableHeader', tableHeader);

	Controller.$inject= ['$scope'];

	function tableHeader() {
		return {
			restrict: 'A',
			templateUrl: 'templates/tableHeaderDirective.html',
			scope: {
				column: '=options'
			},
			contoller: Controller
		};
	}

	function Controller($scope){

		$scope.$on('broadcastSort', function(e, sortType){
			$scope.column.sortType = sortType;
			console.log($scope.column.sortType);
		});
	}
});