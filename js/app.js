(function() {
    var app = angular.module('candidates', ['ui.router']);

    app.config(['$urlRouterProvider','$stateProvider' function ($urlRouterProvider,$stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home',{
            url:'/home',
            templateUrl:'index.html'
        })
    }]);

    app.factory('CandidateServices', ['$http', '$log', function($http, $log) {
        var candidateServiceCall = {
            GetAllCandidates: GetAllCandidates,
            GetCandidateById: GetCandidateById,
            CreateCandidate: CreateCandidate,
            UpdateCandidate: UpdateCandidate,
            GetAllCities: GetAllCities
        };

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

        return candidateServiceCall;
    }]);


    app.controller('CandidateController', ['$log', 'CandidateServices', function($log, CandidateServices) {
        //Initializing Object variable.
        var vm = this;
        //CandidateCollection.
        vm.candidateCollection = {};
        //CityCollection.
        vm.cityCollection = {};
        //Temporary candidate object to add and edit candidates in collection.
        vm.temporaryCandidate = {};

        //Getting data onLodad of this controller.
        CandidateServices.GetAllCandidates().then(function(response) {
            vm.candidateCollection = response;
            vm.temporaryCandidate.Id = parseInt(vm.candidateCollection[vm.candidateCollection.length - 1].Id) + 1;
            //$log.log(parseInt(vm.candidateCollection[vm.candidateCollection.length - 1].Id) + 1);
        });
        CandidateServices.GetAllCities().then(function(response) {
            vm.cityCollection = response;
            //$log.log(vm.cityCollection);
        });




        //function.
        vm.getAllCandidates = function() {
            CandidateServices.GetAllCandidates().then(function(response) {
                vm.candidateCollection = response;
                //$log.log(vm.candidateCollection);
            });
        }
        vm.getCandidateById = function() {

        }
        vm.getAllCitites = function() {
            CandidateServices.GetAllCities().then(function(response) {
                vm.cityCollection = response;
                //$log.log(vm.cityCollection);
            });
        }
        vm.editcandidateInformation = function() {
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
        vm.getCandidateToEditMode = function(index) {
            //$log.log(index);
            vm.temporaryCandidate = angular.copy(vm.candidateCollection[index]);
        }
        var UpdateCandidate = function() {
            angular.forEach(vm.candidateCollection,function(candidate){
                if(candidate.Id===vm.temporaryCandidate.Id)
                {
                    angular.copy(vm.temporaryCandidate,candidate);
                }
            })
        }
        var AddCandidate = function() {
            vm.candidateCollection.push(angular.copy(vm.temporaryCandidate));
        }
        vm.clearTemporaryCandidate = function() {
            vm.temporaryCandidate = {};
            vm.temporaryCandidate.Id = parseInt(vm.candidateCollection[vm.candidateCollection.length - 1].Id) + 1;
        }
    }]);


    app.directive('candidateTable', [function () {
        return {
            restrict: 'E',
            templateUrl:'html/candidateTable.html'
        };
    }]);


    app.directive('candidateForm', [function () {
        return {
            restrict: 'E',
            templateUrl:'html/candidateForm.html'
        };
    }])

})();
