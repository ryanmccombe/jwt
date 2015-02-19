'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('LogoutCtrl', function (authToken, alert, $state) {
    authToken.removeToken();
    alert('success', 'You Logged Out', 'JWT Cleared from Local Storage!');
    $state.go('main');
  });
