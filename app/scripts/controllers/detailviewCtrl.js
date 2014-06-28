'use strict';

app.controller('detailviewCtrl', 
	function ($scope, $routeParams, Detail) {

    $scope.detail = Detail.find($routeParams.detailId);

    $scope.updateDetail = function () {
      Post.updateDetail($routeParams.detailId, $scope.detail);
      $scope.detail = {};
    };

  });
