'use strict';

angular.module('timeTracker')
  .controller('ProjectsCtrl', function ($scope) {
  	$scope.imagePath = configSettings.staticPath + '/assets/images/';
  	$scope.projectData = [
  		{name:"GenTux", hours: 100, remaining: 50},
  		{name:"Demandbase", hours: 250, remaining: 150},
  		{name:"Health1", hours: 1000, remaining: 375}
  	];

  });
