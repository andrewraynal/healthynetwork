'use strict';

app.controller('detailsCtrl', 
  function ($scope, $location, Detail, Auth, User) {
if ($location.path() === '/create-details' || '/detail/:detailId') {
    $scope.details = Detail.all;
  }

  $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};

  $scope.submitDetail = function () {
    Detail.create($scope.detail).then(function (detailId) {
      $location.path('/users/:username');
      $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
    });
  };
    $scope.updateDetail = function () {
    Detail.add($scope.detail).then(function (detailId) {
      // $location.path('/users/:username');
      $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
    });
  };
  $scope.deleteDetail = function (detailId) {
    Detail.delete(detailId);
  };
});