'use strict';

describe('Service: auth', function () {

  // load the service's module
  beforeEach(module('jwtApp'));

  // instantiate service
  var auth;
  beforeEach(inject(function (_auth_) {
    auth = _auth_;
  }));

  it('should do something', function () {
    expect(!!auth).toBe(true);
  });

});
