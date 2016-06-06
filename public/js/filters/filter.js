define(['filters/module'], function(filters) {

	uri.$inject = ['$sce'];

	filters.filter('uri', uri);

	function uri($sce) {
		return function URI(input) {
			return $sce.trustAsHtml('<a href="' + input + '">' + input + '</a>');
		};
	}
});