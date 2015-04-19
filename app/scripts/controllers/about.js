'use strict';

/**
 * @ngdoc function
 * @name angular14App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angular14App
 */
angular.module('angular14App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
