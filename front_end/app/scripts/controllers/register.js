'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, alert, $http, authToken) {
    $scope.submit = function(){
      var url = 'http://localhost:3000/users';
      var user = {
        email: $scope.email,
        password: $scope.password
      };
      $http.post(url, user)
        .success(function(res){
          alert('success', 'Account Created!', 'Welcome, ' + res.user.email + '!');
          authToken.setToken(res.token);
        })
        .error(function(err){
          alert('warning', 'Oops!', 'Could not register')
        })
    }
  });
