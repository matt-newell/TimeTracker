'use strict';

angular.module('timeTracker', ['ngAnimate', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      }) 
      .state('time', {
        url: '/time',
        templateUrl: 'app/time/time.html',
        controller: 'TimeCtrl'
      });      

    $urlRouterProvider.otherwise('/');
  })
;
