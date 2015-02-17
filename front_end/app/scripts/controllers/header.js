'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('HeaderCtrl', function ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  });
