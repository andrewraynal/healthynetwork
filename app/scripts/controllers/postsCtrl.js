  'use strict';

  app.controller('postsCtrl', 
    function ($scope, $location, Post, Auth) {
    	if ($location.path() === '/') {
        $scope.posts = Post.all;
      }

      $scope.post = {url: 'http://', 'title': ''};

      $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
          $location.path('/posts/' + postId);
          $scope.post = {url: 'http://', 'title': ''};
        });
      };

      $scope.deletePost = function (postId) {
        Post.delete(postId);
      };

    });
