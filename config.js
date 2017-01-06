requirejs.config({
    baseUrl: 'bower_components',
    paths: {
        'jquery': 'jquery/dist/jquery.min',
        'jquery.cookie': '../js/cometd/jquery.cookie',
        'angular': 'angular/angular.min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'jquery.cookie' : {
            deps: [
                'jquery'
            ]
        },
        angular: {
            exports: 'angular'
        }
    }
});
requirejs(["../src/app"]);
