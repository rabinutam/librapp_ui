
(function(){
    'use strict';

    var dependencies = [
        'libr.app',
        'ngRoute'
    ];

    angular.module('librapp', dependencies)
        .controller('appController', function($rootScope) {
        })

        .config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/home', {
                    templateUrl: 'home/home-tpl.html',
                    // controller: 'homeController'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }
        //]);
        ])
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            // $httpProvider.defaults.withCredentials = true;
            delete $httpProvider.defaults.headers.common["X-Requested-With"];
            // $httpProvider.defaults.headers.common["Access-Control-Allow-Origin"] = true;
            $httpProvider.defaults.headers.common["Accept"] = "application/json";
            $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        }
        ]);
})();
