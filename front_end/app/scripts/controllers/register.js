'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('RegisterCtrl', function ($scope, alert, auth) {
    $scope.emailRegex = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.style = function(){
      var style = {width: '0%'};
      try {
        if ($scope.password.length >= 8){
          style.width = '0';
        } else {
          style.width = ($scope.password.length * 12.5)+'%';
        }
      }
      catch(err) {

      }
      return style;
    };
    $scope.submit = function(){
      auth.register($scope.email, $scope.password, $scope.password_confirm)
        .success(function(res){
          alert('success', 'Account Created!', 'Welcome, ' + res.user.email + '!');
        })
        .error(function(err){
          alert('warning', 'Oops!', err[0])
        })
    }
  });
