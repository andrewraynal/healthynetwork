'use strict';

angular.module('ahealthynetworkApp')
	.controller('detailCtrl', function ($scope, $location, Detail) {
if ($location.path() === '/') {
    $scope.details = Detail.all;
  }

  $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};

  $scope.submitDetail = function () {
    Detail.create($scope.detail).then(function () {
      console.log($scope.user, $scope.detail.detailId);
      $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
      $location.path('/detailList');
    });
  };

  $scope.deleteDetail = function (detailId) {
    console.log($scope.user);
    Detail.delete(detailId);
  };

});