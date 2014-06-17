'use strict';

var app = angular.module('ahealthynetworkApp');
	app.controller('detailCtrl', function ($scope, $location, Detail) {
		$scope.details = Detail.all;

		$scope.newDetail = {firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
		

		$scope.submitDetail = function () {
		  	Detail.create($scope.newDetail).then(function () {
		  		$scope.newDetail = {firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
		  	});
		  };
		  
		$scope.deleteDetail = function (detailId) {
			Detail.delete(detailId);
		};

	});