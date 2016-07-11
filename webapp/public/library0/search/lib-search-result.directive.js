/*
 * Events List Directive
 */

(function() {
    'use strict';

    angular.module('libr.app')
        .directive('libSearchResult', libSearchResult)

    function libSearchResult() {
        console.log('at libSearchResult directive');
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: 'library/search/template/search-result-tpl.html',
            //controller: 'SearchResultController',
            //controllerAs: 'searchResultVm'
            // shares controller with search directive
            controller: 'SearchController',
            controllerAs: 'searchVm'
        };
        return directive;
    }

})();
