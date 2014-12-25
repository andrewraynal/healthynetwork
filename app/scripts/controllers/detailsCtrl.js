'use strict';

app.controller('detailsCtrl', 
  function ($scope, $location, Detail, Auth, User) {
if ($location.path() === '/details') {
    $scope.details = Detail.all;
  }

  $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};

  $scope.submitDetail = function () {
    Detail.create($scope.detail).then(function (detailId) {
      $location.path('/details/' + detailId);
      $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
    });
  };
    $scope.updateDetail = function () {
    Detail.add($scope.detail).then(function (detailId) {
      $location.path('/users/:username');
      $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
    });
  };
  $scope.deleteDetail = function (detailId) {
    console.log($scope.user);
    Detail.delete(detailId);
  };
  $scope.logout = function () {
    Auth.logout();
  };
});