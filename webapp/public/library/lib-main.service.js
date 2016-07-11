/*
 * Service
 */

(function () {
    'use strict';

    // get module
    angular.module('libr.app')
    .factory('libService', libService)

    libService.$inject = ['$http', '$q']
    function libService($http, $q) {
        var service = {
            apiGet: apiGet,
            apiPost: apiPost,
            apiPut: apiPut
        }
        return service;


        function apiGet(url, params) {
            var rootPath = "http://52.10.166.229/";
            var xurl = rootPath + url;
            var config = {
                params: params
            }

            console.log('calling GET ', xurl, config);
            var deferred = $q.defer();
            $http.get(xurl, config).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function (data) {
                    console.log('@apiGet, error:', data);
                    deferred.reject(data.data.msg);
                }
            );
            return deferred.promise;
        }

        function apiPost(url, data) {
            var rootPath = "http://52.10.166.229/";
            var xurl = rootPath + url;
            var config = {}

            console.log('calling POST ', xurl, config);
            var deferred = $q.defer();
            $http.post(xurl, data, config).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function (data) {
                    console.log('@apiGet, error:', data);
                    deferred.reject(data.data.msg);
                }
            );
            return deferred.promise;
        }

        function apiPut(url, data) {
            var rootPath = "http://52.10.166.229/";
            var xurl = rootPath + url;
            var config = {}

            console.log('calling PUT ', xurl, config);
            var deferred = $q.defer();
            $http.post(xurl, data, config).then(
                function(data){
                    deferred.resolve(data.data);
                },
                function (data) {
                    console.log('@apiGet, error:', data);
                    deferred.reject(data.data.msg);
                }
            );
            return deferred.promise;
        }
        
    }

})();
