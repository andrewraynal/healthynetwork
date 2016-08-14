// 'use strict';
//
// app.controller('detailsCtrl',
//   function ($scope, $location, detailSvc,userSvc) {
// if ($location.path() === '/create-details' || '/detail/:detailId') {
//     $scope.details = detailSvc.all;
//   }
//
//   $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
//
//   $scope.submitdetailSvc = function () {
//     detailSvc.create($scope.detail);
//   };
//     $scope.updatedetailSvc = function () {
//     detailSvc.add($scope.detail).then(function (detailId) {
//       // $location.path('/users/:username');
//       $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
//     });
//   };
//   $scope.deletedetailSvc = function (detailId) {
//     detailSvc.delete(detailId);
//   };
// });
