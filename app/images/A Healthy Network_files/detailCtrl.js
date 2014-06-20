'use strict';

angular.module('ahealthynetworkApp')
	.controller('detailCtrl', function ($scope, $location, Detail) {
if ($location.path() === '/') {
    $scope.details = Detail.all;
  }

  $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};

  $scope.submitDetail = function () {
    Detail.create($scope.detail).then(function () {
      $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
    });
  };

  $scope.deleteDetail = function (detailId) {
    Detail.delete(detailId);
  };

});