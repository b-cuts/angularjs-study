'use strict';
require([
    'jquery', 'angular'
], function () {
    $(function ($, angular) {
        "use strict";
        console.log("Hello World!");
    });

    require([
        '../src/HelloController'
    ], function (HelloController) {
        var app = angular.module('myApp', []);
        app.controller('HelloController', ['$scope', function ($scope) {
            HelloController($scope);
        }]);

        angular.element(function () {
            angular.bootstrap(document, ['myApp']);
        });
    });
});