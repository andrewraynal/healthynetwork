'use strict';

app.controller('homeCtrl',
    function ($scope, $routeParams, postSvc, authSvc, userSvc, detailSvc, chatSvc) {

    $scope.user = userSvc.GetByUsername();
console.log($scope.user)
    $scope.commentedPosts = {};

    function populateMessages () {
      $scope.messages = {};

      angular.forEach($scope.user.messages, function(messageId) {
        $scope.messages[messageId] = chatSvc.find(messageId);
      });
    };
    function populatedetailSvcs () {
      $scope.details = {};

      angular.forEach($scope.user.details, function(detailId) {
        $scope.details[detailId] = detailSvc.find(detailId);
      });
    };
    function populatePosts () {
      $scope.posts = {};

      angular.forEach($scope.user.posts, function(postId) {
        $scope.posts[postId] = postSvc.find(postId);
      });
    };
    function populateMessages () {
      $scope.messages = {};

      angular.forEach($scope.user.messages, function(messageId) {
        $scope.messages[messageId] = chatSvc.find(messageId);
      });
    };
    function populateComments () {
      $scope.comments = {};

      angular.forEach($scope.user.comments, function(comment) {
        var post = postSvc.find(comment.postId);

        post.$on('loaded', function() {
          $scope.comments[comment.id] = post.$child('comments').$child(comment.id);

          $scope.commentedPosts[comment.postId] = post;
        });
      });
    }
  });
