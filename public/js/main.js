require(['angular', 'app'], function(angular, app) {
	'use strict';


	angular.element().ready(function() {
		// bootstrap the app manually
		angular.bootstrap(document, ['myApp']);
	});
});