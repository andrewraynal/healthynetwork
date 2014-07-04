angular.module('ahealthynetworkApp.directives', ['firebase']);
	.factory("chatSvc", ["$firebase", function($firebase) {
    	var ref = new Firebase("https://ahealthynetwork.firebaseio.com/chat");
    	return $firebase(ref);
	  	}])
	.controller("chatCtrl", ["$scope", "chatSvc",
	    function($scope, chatSvc) {
	      $scope.user = "Guest " + Math.round(Math.random()*101);
	      $scope.messages = chatSvc;
	      $scope.addMessage = function() {
	        $scope.messages.$add({from: $scope.user, content: $scope.message});
	        $scope.message = "";
	      };
	    }
	  ]);