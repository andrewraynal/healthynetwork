  'use strict';

  app.controller('postsCtrl',
    function ($scope, $location, postSvc, userSvc, authSvc) {
    	if ($location.path() === '/posts' || '/users/:username') {
        $scope.posts = postSvc.all;
      }
      $scope.post = {content: ''};

      $scope.submitPost = function () {
        postSvc.create($scope.post).then(function () {
          $scope.post = {content: ''};
        });
      };

      $scope.deletePost = function (postId) {
        postSvc.delete(postId);
      };
    });
