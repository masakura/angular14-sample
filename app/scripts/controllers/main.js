'use strict';

/**
 * @ngdoc function
 * @name angular14App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular14App
 */
angular.module('angular14App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });