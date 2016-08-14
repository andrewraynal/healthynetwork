'use strict';

app.controller('detailviewCtrl', 
	function ($scope, $routeParams, detailSvc) {

    $scope.detail = detailSvc.find($routeParams.detailId);

    $scope.updatedetailSvc = function () {
      Post.updatedetailSvc($routeParams.detailId, $scope.detail);
      $scope.detail = {};
    };

  });