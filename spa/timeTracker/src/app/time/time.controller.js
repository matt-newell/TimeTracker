'use strict';

angular.module('timeTracker')
  .controller('TimeCtrl', function ($scope) {
  	$scope.imagePath = configSettings.staticPath + '/assets/images/';
	$scope.minDate = new Date();
  	$scope.selectedProject = undefined;
  	$scope.selectedTask = undefined;
  	$scope.projectData = [
  		{name:"GenTux", hours: 100, remaining: 50},
  		{name:"Demandbase", hours: 250, remaining: 150},
  		{name:"Health1", hours: 1000, remaining: 375}
  	];
  	$scope.taskData = [
  		{name:"Development", hours: 100, remaining: 50},
  		{name:"Project Managment", hours: 250, remaining: 150},
  		{name:"No Ideal", hours: 1000, remaining: 375}
  	];
  	$scope.timeEntries = [];
  	$scope.pushTime = function(){
  		var time = {
  			project: $scope.selectedProject,
  			task: $scope.selectedTask,
  			date: $scope.dt,
  			hours: $scope.hours
  		};
  		$scope.timeEntries.push(time);
  	};
  });
