'use strict';

(function(){
    angular.module('libr.app')
        .controller('topNavController', ['$scope', '$rootScope', '$route',
        function($scope, $rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
                $scope.activeTab = $route.current.activeTab;
            });
        }
    ]);
})();
