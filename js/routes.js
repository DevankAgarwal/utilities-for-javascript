(function() {
    'use strict';

    angular
        .module('candidates', ['ui.router'])
        .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state('dashboard', {
                    url: "/dashboard",
                    template: '<h1>Dash-Board</h1>'
                })
                .state('candidates', {
                    url: "/candidates",
                    template: '<h1>Candidates</h1>'
                }).state('mails', {
                    url: "/mails",
                    template: '<h1>Mails</h1>'
                }).state('contactus', {
                    url: "/contactus",
                    template: '<h1>Contact-us</h1>'
                });
        }]);
})();