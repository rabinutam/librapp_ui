/*
 * Events List Directive
 */

(function() {
    'use strict';

    angular.module('libr.app')
        .directive('libSearch', libSearch)

    function libSearch() {
        console.log('at libSearch directive');
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: 'library/search/template/search-tpl.html',
            controller: 'SearchController',
            controllerAs: 'searchVm'
        };
        return directive;
    }

})();
