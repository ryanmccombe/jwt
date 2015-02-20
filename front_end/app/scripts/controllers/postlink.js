'use strict';

/**
 * @ngdoc function
 * @name jwtApp.controller:PostlinkCtrl
 * @description
 * # PostlinkCtrl
 * Controller of the jwtApp
 */
angular.module('jwtApp')
  .controller('PostlinkCtrl', function ($scope, $http, $timeout, alert, API_URL, URL_REGEX) {
    $scope.newLinks = [];
    $scope.urlRegex = URL_REGEX;

    function addLink(link){
      $timeout(function() {
        $scope.$apply(function(){
          $scope.newLinks.unshift(link);
        });
      });
    }

    $scope.submit = function () {
      var link = {
        link: {
          name: $scope.name,
          url: $scope.url
        }
      };

      $http.post(API_URL + 'links', link).success(function (res) {
        addLink(link);
        alert('success', 'Success! ', 'Added link to ' + link.link.name + '!');
      }).error(function (err) {

      });
    };

    $scope.deleteLink = function(link){
      console.log(link);
      var index = $scope.links.indexOf(link);
      $http.delete(API_URL + 'links/' + link.id)
        .success(function(res){
          $scope.links.splice(index, 1);
          alert('success', 'Success! ', 'Link deleted');
        })
        .error(function(err){
          alert('warning', 'Oops! ', err.message);
        });
    };
  });
