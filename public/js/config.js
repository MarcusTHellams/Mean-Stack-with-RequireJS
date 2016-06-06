require.config({
    paths: {
        angular: '../../angular/angular.min',
        jQuery: '../../jquery/dist/jquery.min',
        bootstrap: '../../bootstrap/dist/js/bootstrap.min',
        'ui-router': '../../angular-ui-router/release/angular-ui-router.min',
        'lo-dash': '../../lodash/dist/lodash.min',
        'ui-grid': '../../angular-ui-grid/ui-grid-unstable',
        'handlebars': '../../handlebars/handlebars.min',
        'text': '../../text/text',
        'sanitize': 'angular-sanitize.min'
    },
    shim: {
        angular: {
            exports: 'angular',
        },
        sanitize: {
            exports: 'sanitize',
            deps: ['angular']
        },
        handlebars: {
            exports: 'handlebars'
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
    hbs: {
        templateExtension: '.html',
        compilerPath: '../../handlebars/handlebars.min'
    },
    packages: [{
        name: 'hbs',
        location: '../../requirejs-hbs/',
        main: 'hbs'
    }],
    deps: ['text', 'main', 'jQuery']
});