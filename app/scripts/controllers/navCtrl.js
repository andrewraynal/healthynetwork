'use strict';

angular.module('ahealthynetworkApp')
  .controller('navCtrl', 

  function ($scope, $location, Journal, Auth) {
    $scope.journal = {owner: 'journal.owner'};

    $scope.submitJournal = function () {
        Journal.create($scope.journal).then(function (journalId) {
        $location.path('/journals/' + journalId);
        $scope.journal = {owner: 'journal.owner'};
      });
      };
    }
    )
  .controller('nav1Ctrl', 
  function ($scope, $location, Detail, Auth) {
    $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};

     $scope.submitDetail = function () {
        Detail.create($scope.detail).then(function (detailId) {
        $location.path('/details/' + detailId);
        $scope.detail = {photo: '', firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: ''};
      });
    };

    $scope.logout = function () {
      Auth.logout();
    };

  });