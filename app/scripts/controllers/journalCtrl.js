  'use strict';

  app.controller('journalCtrl', function ($scope, $location, Post) {
	 $scope.journal = Post.all;
  
  $scope.post = {url: 'http://', title: ''};

 $scope.submitPost = function () {
    Post.create($scope.post).then(function () {
      $scope.post = {url: 'http://', 'title': ''};
    });
  };

  $scope.deletePost = function (postId) {
    Post.delete(postId);
  };

});
