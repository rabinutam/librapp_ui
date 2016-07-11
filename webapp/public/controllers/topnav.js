'use strict';

(function(){
    angular.module('librapp')
        .controller('topNavController', ['$scope', '$rootScope', '$route',
        function($scope, $rootScope, $route) {
            $rootScope.$on('$routeChangeSuccess', function () {
                $scope.activeTab = $route.current.activeTab;
            });
        }
    ]);
})();
