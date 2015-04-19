'use strict';

function AppController () {}

/**
 * @ngdoc overview
 * @name angular14App
 * @description
 * # angular14App
 *
 * Main module of the application.
 */
angular
  .module('angular14App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngNewRouter'
  ])
  .controller('AppController', AppController);
AppController. $routeConfig = [
  {path: '/', component: 'main'},
  {path: '/about', component: 'about'},
];
