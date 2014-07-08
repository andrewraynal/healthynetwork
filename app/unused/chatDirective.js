'use strict';
app.directive('chatDirective', function () { 
		return {
 			restrict: 'E',
      		replace: 'true',
      		templateUrl: 'views/firechat.html',
      		scope: { message: '@message'},

	controller: ['$scope', '$firebase', '$attrs', '$transclude',
    	function ($scope, $firebase, $attrs, $transclude) {
    		var chatRef = new Firebase('https://ahealthynetwork.firebaseio.com/' + 'chat');
			return $firebase(chatRef);
        	var chat = FirechatUI(chatRef, document.getElementbyId("firechat-wrapper"));
            	chat.setUser(user.username);
			    $scope.messages = Chat;
				      $scope.addMessage = function() {
				        $scope.messages.$add({from: $scope.user, content: $scope.message});
				        $scope.message = "";
				      };
					}],
				};
				});
	// .factory('Chat', function ($firebase, FBURL, User) {
 //      var chatRef = new Firebase(FBURL + 'chat');
 //      return $firebase(chatRef);
 //   });
	