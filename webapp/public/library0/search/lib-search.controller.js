/*
 * Search Controller
 */

(function (){
    'use strict';

    angular.module('libr.app')
    .controller('SearchController', SearchController)

    //SearchController.$inject = ['apiService']

    //function SearchController(apiService) {
    function SearchController() {
        var searchVm = this;
        searchVm.searchBooks = searchBooks;
        searchVm.books = [];
        searchVm.searchText = "";

        function activate() {
            return getEvents().then(function(){
                console.log('Activated Events View');
            });
        }

        function searchBooks() {
            console.log('@ in function searchVm.searchBooks');
            searchVm.books = [
                {isbn: '123', title: 'title1', cover: "http://www.openisbn.com/cover/0380699710_72.jpg"},
                {isbn: '234', title: 'title2', cover: "http://www.openisbn.com/cover/0380699710_72.jpg"},
                ]
            console.log(searchVm.books);
            var url = "search?q=" + searchVm.searchText;
            console.log(url);
            // apiService.get();
            /*
            return apiService.getEvents().then(function(data) {
                    console.log(data);
                    searchVm.events = data;
                    return searchVm.events;
                });
            */
        }
    }

})();
