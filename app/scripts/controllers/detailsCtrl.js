'use strict';

app.controller('detailsCtrl', 
  function ($scope, $location, Detail, Auth) {

    $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
  
  $scope.submitDetail = function () {
    Detail.create($scope.detail).then(function (detailId) {
      $location.path('/details/' + detailId);
       console.log($location.path(detail));
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