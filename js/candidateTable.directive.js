(function() {
    'use strict';

    angular
        .module('candidates')
        .directive('candidateTable', candidateTable);

    /* @ngInject */
    function candidateTable () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            templateUrl:'html/candidateTable.tmp.html'
        };
        return directive;
    }
})();
