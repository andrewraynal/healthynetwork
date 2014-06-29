'use strict';

app.controller('detailviewCtrl', 
	function ($scope, $routeParams, User, Detail) {

    $scope.detail = Detail.find($routeParams.detailId);

    $scope.submitDetail = function () {
      Detail.submitDetail($routeParams.detailId, $scope.detail);
      $scope.detail = {};
    };

  });
