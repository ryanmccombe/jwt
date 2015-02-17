'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('LogoutCtrl', function (authToken, $state) {
    authToken.removeToken();
    $state.go('main');
  });
