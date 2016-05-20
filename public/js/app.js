define([
	'angular',
	'lo-dash',
	'controllers/index',
	'ui-grid'
], function(
	angular,
	_
) {
	'use strict';

	var app = angular.module('myApp', [
		'ui.grid',
		'ui.grid.edit',
		'myApp.controllers'
	]);

});