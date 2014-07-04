'use strict';

app.controller('detailviewCtrl', 
	function ($scope, $routeParams, User, Detail) {

    $scope.detail = Detail.find($routeParams.detailId);

     $scope.updateDetail = function (detailId) {
        Detail.update(detailId);
      };

  });
