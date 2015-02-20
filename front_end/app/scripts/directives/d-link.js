'use strict';

/**
 * @ngdoc directive
 * @name jwtApp.directive:link
 * @description
 * # link
 */
angular.module('jwtApp')
  .directive('d-link', function () {
    return {
      controller: function($scope){
        $scope.removeLink = function(link){

        }

      }
    };
  });
