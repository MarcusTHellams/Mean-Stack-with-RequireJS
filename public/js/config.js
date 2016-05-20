require.config({
    paths: {
        angular: '../../angular/angular.min',
        jQuery: '../../jquery/dist/jquery.min',
        bootstrap: '../../bootstrap/dist/js/bootstrap.min',
        'ui-router': '../../angular-ui-router/release/angular-ui-router.min',
        'lo-dash': '../../lodash/dist/lodash.min',
        'ui-grid': '../../angular-ui-grid/ui-grid-unstable'
    },
    shim: {
        angular: {
            exports: 'angular',
        },
        'ui-router': {
            exports: 'ui-router',
            deps: ['angular']
        },
        jQuery: {
            exports: 'jQuery'
        },
        bootstrap: {
            deps: ['jQuery'],
            exports: 'bootstrap'
        },
        'lo-dash': {
            exports: 'lo-dash'
        },
        'ui-grid': {
            deps: ['angular'],
            exports: 'ui-grid'
        }
    },
    deps: ['main', 'jQuery']
});