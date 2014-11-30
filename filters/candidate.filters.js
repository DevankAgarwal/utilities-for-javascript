(function() {
        'use strict';

        angular.module('candidates')
            .filter('indianMobileNumber', function indianMobileNumber($log) {
                    return function(input) {
                        if (input) {
                            input = parseInt(input);
                            if (!isNaN(input)) {
                            		input=input.toString();
                                    return '(+91)' + input.slice(0, 4) + '-' + input.slice(5, 7) + '-' + input.slice(7, 10);
                                } else {
                                		console.log(input);
                                    input='';
                                    return input;
                                }
                            }
                        }
                    })
            })();
