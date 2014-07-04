'use strict';

app.controller('postviewCtrl', 
	function ($scope, $location, $routeParams, Post, Auth) {
      $scope.posts = Post.all;
      $scope.post = {content: ''};

      $scope.deletePost = function (postId) {

        Post.delete(postId);
      };

    $scope.post = Post.find($routeParams.postId);

    $scope.addComment = function () {
      Post.addComment($routeParams.postId, $scope.comment);
      $scope.comment = {};
    };

    $scope.removeComment = function (comment, commentId) {
      Post.deleteComment($scope.post, comment, commentId);
    };

  });
