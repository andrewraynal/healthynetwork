'use strict';

app.controller('chatCtrl', function($scope, $location, chatSvc, chatsSvc, userSvc, authSvc) {
  $scope.user = userSvc.GetByUsername();
  var vm = this;
    $scope.createChat = function(chat) {
      chatsSvc.create(chat);
      $location.path('/chat');
    };
    $scope.chats = chatsSvc.query();
});
