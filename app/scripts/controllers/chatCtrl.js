'use strict';

app.controller('chatCtrl',
    function ($scope, $location, Chat, User, Auth) {
    	if ($location.path() === '/chat' || '/users/:username') {
        $scope.messages = Chat.all;
      }

      $scope.message = {content: ''};

      $scope.addMessage = function () {
        Chat.create($scope.message).then(function () {
          $scope.message = {content: ''};
        });
      };

      $scope.deleteMessage = function (messageId) {
        Post.delete(messageId);
      };

  });