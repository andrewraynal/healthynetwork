'use strict';

var app = angular.module('ahealthynetworkApp');
	app.controller('journalCtrl', function ($scope, $location, Journal) {
		$scope.messages = Journal.all;

		$scope.newMessage = {from: '', content: '', date: ''};
		

		$scope.submitMessage = function () {
		  	Journal.create($scope.newmessage).then(function () {
		  		$scope.newMessage = {from: '', content: '', date: ''};
		  	});
		  };
		  
		  
		$scope.deleteMessage = function (messageId) {
			Journal.delete(messageId);
		};

	});