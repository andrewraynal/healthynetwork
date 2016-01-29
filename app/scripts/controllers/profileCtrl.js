'use strict';

app.controller('profileCtrl',
    function ($scope, $routeParams, Post, Auth, User, Detail, Chat) {

    $scope.user = User.findByUsername($routeParams.username);

    $scope.commentedPosts = {};

    $scope.user.$on('loaded', function () {
      populatePosts();
      populateDetails();
      populateComments();
      populateMessages();
    });

    function populateMessages () {
      $scope.messages = {};

      angular.forEach($scope.user.messages, function(messageId) {
        $scope.messages[messageId] = Chat.find(messageId);
      });
    };
    function populateDetails () {
      $scope.details = {};

      angular.forEach($scope.user.details, function(detailId) {
        $scope.details[detailId] = Detail.find(detailId);
      });
    };
    function populatePosts () {
      $scope.posts = {};

      angular.forEach($scope.user.posts, function(postId) {
        $scope.posts[postId] = Post.find(postId);
      });
    };
    function populateMessages () {
      $scope.messages = {};

      angular.forEach($scope.user.messages, function(messageId) {
        $scope.messages[messageId] = Chat.find(messageId);
      });
    };
    function populateComments () {
      $scope.comments = {};

      angular.forEach($scope.user.comments, function(comment) {
        var post = Post.find(comment.postId);

        post.$on('loaded', function() {
          $scope.comments[comment.id] = post.$child('comments').$child(comment.id);

          $scope.commentedPosts[comment.postId] = post;
        });
      });
    }
  });