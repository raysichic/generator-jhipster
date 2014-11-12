'use strict';

angular.module('<%=angularAppName%>')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/logout', {
                templateUrl: 'scripts/client/app/main/main.html',
                controller: 'LogoutController'
            })
    })
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
