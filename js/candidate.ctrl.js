(function() {
    'use strict';

    angular
        .module('candidates')
        .controller('candidateCtrl', Ctrl);

    /* @ngInject */
    function Ctrl($log, $timeout,$scope ,$location, CandidateServices) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'Ctrl';

        vm.candidateCollection = {};
        vm.cityCollection = {};
        vm.temporaryCandidate = {};

        vm.getAllCandidates = getAllCandidates;
        vm.getCandidateById = getCandidateById;
        vm.getAllCitites = getAllCitites;
        vm.editcandidateInformation = editcandidateInformation;
        vm.getCandidateToEditMode = getCandidateToEditMode;
        vm.clearTemporaryCandidate = clearTemporaryCandidate;


        activate();

        function activate() {
            //$log.log('activate');
            vm.getAllCandidates();
            vm.getAllCitites();
            // $timeout(function(){
            //     $log.log('timeOut')
            // },5000);
            // $log.log($location.absUrl());
            // $log.log($location.url());
            // $log.log($location.protocol());
            // $log.log($location.host());
            // $log.log($location.port());
            // $log.log($location.path());

        }

        function getAllCandidates() {
            //$log.log('getAllCandidates');
            CandidateServices.GetAllCandidates().then(function(response) {
                vm.candidateCollection = response;
                vm.temporaryCandidate.Id = parseInt(vm.candidateCollection[vm.candidateCollection.length - 1].Id) + 1;
                //$log.log(vm.candidateCollection);
            });

        }

        function getCandidateById() {

        }

        function getAllCitites() {
            CandidateServices.GetAllCities().then(function(response) {
                vm.cityCollection = response;
                //$log.log(vm.cityCollection);
            });

        }

        function editcandidateInformation() {
            var isFound = false;
            angular.forEach(vm.candidateCollection, function(candidate) {
                    if (vm.temporaryCandidate.Id === candidate.Id) {
                        UpdateCandidate();
                        isFound = true;
                    }
                }

            );
            if (!isFound) {
                AddCandidate();
            }
            vm.clearTemporaryCandidate();

        }

        function getCandidateToEditMode(index) {
            vm.temporaryCandidate.City.Name=vm.candidateCollection[index].City.Name;
            vm.temporaryCandidate = angular.copy(vm.candidateCollection[index]);

        }

        function UpdateCandidate() {
            angular.forEach(vm.candidateCollection, function(candidate) {
                if (candidate.Id === vm.temporaryCandidate.Id) {
                    angular.copy(vm.temporaryCandidate, candidate);
                }
            });

        }

        function AddCandidate() {
            vm.candidateCollection.push(angular.copy(vm.temporaryCandidate));

        }

        function clearTemporaryCandidate() {
            vm.temporaryCandidate = {};
            vm.temporaryCandidate.Id = parseInt(vm.candidateCollection[vm.candidateCollection.length - 1].Id) + 1;
        }
    }
})();
