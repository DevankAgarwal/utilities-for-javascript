(function() {
    'use strict';

    angular
        .module('candidates')
        .directive('headerNav', headerNav);

    /* @ngInject */
    function headerNav () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            templateUrl:'html/header.tmp.html'
        };
        return directive;
    }
})();