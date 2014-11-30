(function() {
    'use strict';

    angular
        .module('candidates')
        .factory('CandidateServices', factory);

    /* @ngInject */
    function factory($http, $log) {
        var service = {
            GetAllCandidates: GetAllCandidates,
            GetCandidateById: GetCandidateById,
            CreateCandidate: CreateCandidate,
            UpdateCandidate: UpdateCandidate,
            GetAllCities: GetAllCities
        };
        return service;

        ////////////////

        function GetAllCandidates() {
            var promise = $http.get('data/candidates.json').then(function(response) {
                //$log.log(response);
                return response.data;
            });
            return promise;
        }

        function GetCandidateById() {}

        function CreateCandidate() {}

        function UpdateCandidate() {}

        function GetAllCities() {
            var promise = $http.get('data/city.json').then(function(response) {
                //$log.log(response);
                return response.data;
            });
            return promise;
        }
    }
})();