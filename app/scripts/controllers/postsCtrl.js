  'use strict';

  app.controller('postsCtrl', 
    function ($scope, $location, Post, Auth) {
    	if ($location.path() === '/posts/:postId') {
        $scope.posts = Post.all;
      }

      $scope.post = {url: 'http://', 'title': ''};

      $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
          $scope.post = {url: 'http://', 'title': ''};
        });
      };

      $scope.deletePost = function (postId) {
        Post.delete(postId);
      };

    });
