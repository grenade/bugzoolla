'use strict';

/**
 * @ngdoc function
 * @name bugzoollaApp.factory:BugFactory
 * @description
 * # BugFactory
 * bug reource factory of the bugzoollaApp
 */
angular.module('bugzoollaApp')
  .factory('BugFactory', function ($resource) {
    return $resource('https://bugzilla.mozilla.org/rest/bug/:id', { id: '@_id' }, {
      update: {
        method: 'PUT'
      },
      query: {
        isArray: false
      }
    });
  });
