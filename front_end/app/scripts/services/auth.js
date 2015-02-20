'use strict';

/**
 * @ngdoc service
 * @name jwtApp.auth
 * @description
 * # auth
 * Service in the jwtApp.
 */
angular.module('jwtApp')
  .service('auth', function ($http, API_URL, authToken, $state) {
    function authSuccessful(res){
      authToken.setToken(res.token);
      $state.go('main');
    }

    this.login = function (email, password) {
      return $http.post(API_URL + 'login', {
        user: {
          email: email,
          password: password
        }
      }).success(authSuccessful);
    };

    this.register = function(email, password, confirmation){
      return $http.post(API_URL + 'register', {
        user: {
          email: email,
          password: password,
          password_confirmation: confirmation
        }
      }).success(authSuccessful);
    };
  });
