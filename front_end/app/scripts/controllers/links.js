'use strict';

angular.module('jwtApp')
  .controller('LinksCtrl', function ($scope, $http, API_URL, alert) {
    $scope.user = false;
    $http.get(API_URL + 'links').success(function(res){
      $scope.links = res.links;
      $scope.user = res.user;
    }).error(function(err){
      alert('warning', 'Unable to get links', err.message);
    });
  });
