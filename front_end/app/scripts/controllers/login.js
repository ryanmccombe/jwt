'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('LoginCtrl', function ($scope, alert, authToken, auth, EMAIL_REGEX) {
    $scope.emailRegex = EMAIL_REGEX;
    $scope.submit = function(){
      auth.login($scope.email, $scope.password)
        .success(function(res){
          alert('success', 'Welcome back, ', res.user.email + '!');
        })
        .error(function(err){
          alert('warning', 'Oops!', err.message)
        })
    }
  });
