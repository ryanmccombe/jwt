'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, alert, $http) {
    $scope.submit = function(){
      var url = 'http://localhost:3000/register';
      var user = {
        email: $scope.email,
        password: $scope.password
      };
      $http.post(url, user)
        .success(function(res){
          alert('success', 'OK!', 'You are now registered')
        })
        .error(function(err){
          alert('warning', 'Oops!', 'Could not register')
        })
    }
  });