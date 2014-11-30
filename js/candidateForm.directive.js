(function() {
    'use strict';

    angular
        .module('candidates')
        .directive('candidateForm', candidateForm);

    /* @ngInject */
    function candidateForm () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl:'html/candidateForm.tmp.html'
        };
        return directive;
    }
})();