'use strict';

/**
 * @ngdoc service
 * @name jwtApp.authToken
 * @description
 * # authToken
 * Factory in the jwtApp.
 */
angular.module('jwtApp')
  .factory('authToken', function ($window) {
    var storage = $window.localStorage;
    var cachedToken;
    var userToken = 'userToken';

    var authToken = {
      setToken: function(token){
        cachedToken = token;
        storage.setItem(userToken, token);
      },
      getToken: function(){
        if(!cachedToken){
          cachedToken = storage.getItem(userToken);
        }
        return cachedToken;
      },
      removeToken: function(){
        cachedToken = null;
        storage.removeItem(userToken);
      },
      isAuthenticated: function(){
        return !!authToken.getToken();
      }
    };

    return authToken;
  });
