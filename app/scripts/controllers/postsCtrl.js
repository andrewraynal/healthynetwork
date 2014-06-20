'use strict';

angular.module('ahealthynetworkApp')
  .controller('journalsCtrl', function ($scope, $location, Journal) {
  if ($location.path() === '/') {
    $scope.journals = Journal.all;
  }

  $scope.post = {url: 'http://', 'title': ''};

  $scope.submitPost = function () {
    Journal.create($scope.post).then(function () {
      $scope.journal = {url: 'http://', 'title': ''};
    });
  };

  $scope.deletePost = function (postId) {
    Journal.delete(postId);
  };

});
