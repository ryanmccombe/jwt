'use strict';

describe('Controller: PostlinkCtrl', function () {

  // load the controller's module
  beforeEach(module('jwtApp'));

  var PostlinkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostlinkCtrl = $controller('PostlinkCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
