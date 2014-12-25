  'use strict';

  app.controller('postsCtrl', 
    function ($scope, $location, Post, User, Auth) {
    	if ($location.path() === '/posts/:postId' || '/posts' || 'users/:username') {
        $scope.posts = Post.all;
      }
      $scope.post = {content: ''};

      $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
          $scope.post = {content: ''};
        });
      };

      $scope.deletePost = function (postId) {
        Post.delete(postId);
      };
    });