'use strict';

describe('Controller: BugCtrl', function () {

  // load the controller's module
  beforeEach(module('bugzoollaApp'));

  var BugCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BugCtrl = $controller('BugCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BugCtrl.awesomeThings.length).toBe(3);
  });
});