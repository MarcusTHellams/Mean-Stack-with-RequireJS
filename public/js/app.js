define([
	'angular',
	'lo-dash',
	'controllers/index',
	'directives/index',
	'filters/index',
	'ui-grid',
	'sanitize'
], function(
	angular,
	_
) {
	'use strict';

	var app = angular.module('myApp', [
		'ui.grid',
		'ui.grid.edit',
		'myApp.controllers',
		'myApp.directives',
		'myApp.filters',
		'ngSanitize'
	]);

});