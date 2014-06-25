  'use strict';

  app.controller('navCtrl', function ($scope, $location, Post, Auth) {
  $scope.post = {url: 'http://', 'title': ''};

  $scope.submitPost = function () {
    Post.create($scope.post).then(function (postId) {
      $location.path('/journal/' + postId);
      $scope.post = {url: 'http://', 'title': ''};
    });
  };

  $scope.logout = function () {
  	Auth.logout();
  };
 });