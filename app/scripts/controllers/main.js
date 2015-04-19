'use strict';

/**
 * @ngdoc function
 * @name angular14App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angular14App
 */
angular.module('angular14App')
  .controller('MainController', function ($rootScope) {
    var todos = this.todos = [];
   var firebase = new Firebase('https://angular14-sample.firebaseio.com/');

    firebase.child('todos').on('child_added', function (todo) {
      todos.push(todo.val());

      $rootScope.$$phase || $rootScope.$apply();
    });

    var input = this.input = {
      text: ''
    };

    this.add = function () {
      var todo = {text: input.text};

      firebase.child('todos').push(todo);

      input.text = '';
    };
  });
