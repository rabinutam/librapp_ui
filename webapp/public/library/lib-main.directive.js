/*
 * Events List Directive
 */

(function() {
    'use strict';

    angular.module('libr.app')
        .directive('libMain', libMain)

    function libMain() {
        console.log('at libMain directive');
        var directive = {
            restrict: 'E',
            scope: {},
            templateUrl: 'library/template/lib-main-tpl.html',
            controller: 'libController',
            controllerAs: 'libVm'
        };
        return directive;
    }

})();
