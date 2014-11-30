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
            GetAllCities: GetAllCities,
            getDate: getDate,
            keyChanger: keyChanger
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


        function getDate(dateJson) {
            var d1, d2;
            var seprator = dateJson.seprator;
            var d1 = new Date();
            var d2 = new Date();
            var dateFormate = dateJson.currentDateFormate;
            var d1Array = dateJson.date.split(seprator);
            var d2Array = dateJson.date2.split(seprator);
            switch (dateFormate) {
                case 'DDMMYYYY':
                    d1.setDate(parseInt(d1Array[0]));
                    d1.setMonth(parseInt(d1Array[1] - 1));
                    d1.setYear(parseInt(d1Array[2]));
                    d2.setDate(parseInt(d2Array[0]));
                    d2.setMonth(parseInt(d2Array[1] - 1));
                    d2.setYear(parseInt(d2Array[2]));
                    break;
            }
            var yearDiff = d1.getFullYear() - d2.getFullYear(); // for year difference
            var y1 = d1.getFullYear();
            var y2 = d2.getFullYear();
            var monthDiff = (d1.getMonth() + y1 * 12) - (d2.getMonth() + y2 * 12);
            var day1 = parseInt(d1.getDate());
            var day2 = parseInt(d2.getDate());
            var dayDiff = (day1 - day2) + (monthDiff * 30)
            console.log(yearDiff, monthDiff, dayDiff);
            console.log(d1, d2);
        }

        function keyChanger(keys, collection) {
            var newCollection = [];
            angular.forEach(collection, function(key, value) {
                var tempObj = {};
                angular.forEach(key, function(a, b) {
                    if (!angular.isUndefined(keys[b]))
                    {
                        tempObj[keys[b]] = a;
                    }
                });
                newCollection.push(tempObj);
            });
            return newCollection
        }

    }
})();
