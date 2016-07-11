/*
 * Search Controller
 */

(function (){
    'use strict';

    angular.module('libr.app')
    .controller('libController', libController)

    libController.$inject = ['libService']
    function libController(libService) {
        var libVm = this;

        // functions
        libVm.searchBooks = searchBooks;
        libVm.checkOutBook = checkOutBook;
        libVm.selectLib = selectLib;

        // attributes
        libVm.books = [];
        libVm.booksCount = 0;
        libVm.searchText = "";
        libVm.searchSuccess = false;
        libVm.showcheckOutForm = false;
        libVm.message = "";
        libVm.errorMessage = false;
        libVm.selectedLib = 1;
        libVm.libOptions = [
            {value: 1, name: 'Oak Lawn'},
            {value: 2, name: 'Lakewood'},
            {value: 3, name: 'Grauwyler Park'},
            {value: 4, name: 'Highland Hills'},
            {value: 5, name: 'Audelia Road'}
        ]

        function blah() {
            console.log('blah');
        }

        //TODO move this function to service
        function checkOutBook(book, cardNo) {
            console.log('@ in fn checkOutBook', book, cardNo);
            var url = 'books/loans'
            var data = {
                card_no: cardNo,
                isbn: book.isbn,
                lib_branch_id: libVm.selectedLib
            }
            libService.apiPost(url, data).then(
                function(data) {
                    console.log('@ checkOutBook, data:', data);
                    libVm.books = data.books;
                    libVm.booksCount = data.count;
                },
                function(msg) {
                    console.log('@ checkOutBook, error', msg);
                    libVm.message = msg;
                    libVm.errorMessage = true;
                }
            );
        }

        function selectLib() {
            console.log('@ in fn selectLib');
        }

        function searchBooks() {
            console.log('@ in function libVm.searchBooks');
            var url = "search"
            var params = {
                q: libVm.searchText,
                lib_branch_id: libVm.selectedLib
            }
            libService.apiGet(url, params).then(
                function(data) {
                    console.log('@ searchBooks, data:', data);
                    libVm.books = data.books;
                    libVm.booksCount = data.count;
                },
                function(msg) {
                    console.log('@ searchBooks, error', msg);
                    libVm.message = msg;
                    libVm.errorMessage = true;
                }
            );
            libVm.searchSuccess = true;
            console.log(libVm.books);
        }
    }

})();
