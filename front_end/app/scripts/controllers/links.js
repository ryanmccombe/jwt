'use strict';

angular.module('jwtApp')
  .controller('LinksCtrl', function ($scope, $http, API_URL, alert) {
    $http.get(API_URL + 'links').success(function(links){
      $scope.links = links;
    }).error(function(err){
      alert('warning', 'Unable to get links', err.message);
    });
  });
