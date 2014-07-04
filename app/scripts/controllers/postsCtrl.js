  'use strict';

  app.controller('postsCtrl', 
    function ($scope, $location, Post, Auth) {
    	if ($location.path() === '/') {
        $scope.posts = Post.all;
      }

      $scope.post = {content: ''};

      $scope.submitPost = function () {
        Post.create($scope.post).then(function (postId) {
          $location.path('/posts/' + postId);
          $scope.post = {content: ''};
        });
      };

      $scope.deletePost = function (postId) {

        Post.delete(postId);
      };

    });
