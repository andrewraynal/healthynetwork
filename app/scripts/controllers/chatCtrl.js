'use strict';

app.controller("chatCtrl", ["$scope", "chatSvc", "User",
	    function($scope, chatSvc, User) {
	      $scope.user = "Guest " + Math.round(Math.random()*101);
	      $scope.messages = chatSvc;
	      $scope.addMessage = function() {
	        $scope.messages.$add({from: $scope.user, content: $scope.message});
	        $scope.message = "";
	      };
	    }
	  ]);