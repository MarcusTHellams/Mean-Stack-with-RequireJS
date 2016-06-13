define([
	'angular',
	'lo-dash',
	'controllers/index',
	'directives/index',
	'filters/index',
	'ui-grid',
	'sanitize',
	'ng-bootstrap',
	'ng-editable'
], function(
	angular,
	_
) {
	'use strict';

	run.$inject = ['editableOptions'];

	var app = angular.module('myApp', [
			'ui.grid',
			'ui.grid.edit',
			'myApp.controllers',
			'myApp.directives',
			'myApp.filters',
			'ngSanitize',
			'ui.bootstrap',
			'xeditable'
		])
		.run(run);


	function run(editableOptions) {
		editableOptions.theme = 'bs3';
	}

});