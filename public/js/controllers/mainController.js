define(['controllers/module', 'lo-dash', 'ui-grid'], function(controllers, _) {
	'use strict';

	MainController.$inject = ['$scope', '$http'];

	controllers.controller('MainController', MainController);

	function MainController($scope, $http) {

		$scope.$on('sortTheColumn', function(e, name, reverse) {
			$scope.sortReverse = reverse;
			$scope.sortType = name;
			$scope.$broadcast('broadcastSort', $scope.sortType);
		});

		$scope.console = console.log;
		$scope.showPagination = true;
		$scope.perPage = 5;
		$scope.currentPage = 1;
		$scope.pagination = [];
		$scope.last = 0;
		$scope.limit = 3;
		$scope.classForPaginationForm = 'pagination-form';
		$scope.sortType = 'name'; // set the default sort type
		$scope.sortReverse = false;
		$scope.columnDefinitions = [{
			name: 'name',
			label: 'Name',
			reverse: $scope.sortReverse,
			sortType: $scope.sortType
		}, {
			name: 'url',
			label: 'Url',
			reverse: $scope.sortReverse,
			sortType: $scope.sortType
		}, {
			name: 'pop',
			label: 'Population',
			reverse: $scope.sortReverse,
			sortType: $scope.sortType
		}, {
			name: 'date',
			label: 'Date',
			reverse: $scope.sortReverse,
			sortType: $scope.sortType
		}, {
			name: 'percentage',
			label: 'Percentage',
			reverse: $scope.sortReverse,
			sortType: $scope.sortType
		}];

		$scope.setCurrentPage = function(number) {

			if (number < 1) {
				number = 1;
			}

			if (number > $scope.last) {
				number = $scope.last;
			}

			$scope.currentPage = number;
		};
		$scope.totalLength = 0;
		$scope.goToPage = 1;
		$scope.perPageOptions = [5, 10, 15, 20, 25, 50, 100, 'All'];

		addCurrentPageWatcher();

		$scope.$watch('perPage', function handleChange(newValue, oldValue) {
			if (oldValue !== newValue) {
				fetchFromResource();
				if (newValue === 'All') {
					$scope.showPagination = false;
					$scope.classForPaginationForm = 'pagination-form--no-pagination-links';
				} else {
					$scope.showPagination = true;
					$scope.classForPaginationForm = 'pagination-form';
				}
			}


		});

		$scope.$watch('goToPage', function handleChange(newValue, oldValue) {
			if (oldValue !== newValue) {
				$scope.currentPage = newValue;
			}

		});

		$http.get('/api/numberOfTerritories')
			.then(function(res) {
				$scope.totalLength = res.data * 1;
				layOutPaging();
			});


		$http.get('/api/territories/' + 0 + '/' + $scope.perPage)
			.then(function(res) {
				$scope.countries = res.data;
			});


		function layOutPaging() {
			$scope.last = Math.ceil($scope.totalLength / $scope.perPage);
			$scope.pagination = [];
			$scope.dropDownPagination = [];

			for (var x = ($scope.currentPage - $scope.limit); x < (($scope.currentPage + $scope.limit) + 1); x++) {

				if (x > 0 && x <= $scope.last) {
					$scope.pagination.push(x);
				}
			}

			for (var i = 1; i <= $scope.last; i++) {
				$scope.dropDownPagination.push(i);
			}

			if ($scope.dropDownPagination.length === 0) {
				$scope.dropDownPagination.push(1);
			}

			$scope.goToPage = $scope.currentPage;

			if (_.indexOf($scope.pagination, $scope.last) === -1) {

				$scope.showLast = true;
			} else {
				$scope.showLast = false;
			}

			if (_.indexOf($scope.pagination, 1) === -1) {

				$scope.showFirst = true;
			} else {
				$scope.showFirst = false;
			}

		}

		function fetchFromResource() {
			var perPage;
			if (typeof $scope.perPage === 'string' && $scope.perPage.toLowerCase() === 'all') {
				perPage = 0;
			} else {
				perPage = $scope.perPage;
			}

			$http.get('/api/territories/' + (($scope.currentPage - 1) * perPage) + '/' + $scope.perPage).then(function(res) {
				$scope.countries = res.data;
				layOutPaging();
			});
		}

		function addCurrentPageWatcher() {
			var unWatch = $scope.$watch('currentPage', function handleChange(newValue, oldValue) {
				if (oldValue !== newValue) {

					if ($scope.currentPage < 0 || !$scope.currentPage) {
						$scope.currentPage = 1;
					}
					unWatch();
					addCurrentPageWatcher();

					fetchFromResource();
				}
			});
		}

		//end of MainController
	}
});