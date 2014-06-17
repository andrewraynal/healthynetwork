'use strict';

angular.module('ahealthynetworkApp')
	.controller('detailCtrl', ['$scope', '$location', 'detailSvc', function ($scope, $location, detailSvc) {
		$scope.newDetail = {firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: '', privacy: ''};
		$scope.currentDetail = null;
		
		$scope.details = detailSvc.getDetails();

		$scope.addDetail = function () {
		  	detailSvc.addDetail(angular.copy($scope.newDetail));
		  	$scope.newDetail = {firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: '', privacy: ''};
		  	$location.path('/userhome');
		};
		$scope.updateDetail = function (id) {
			detailSvc.updateDetail(id);
			$location.path('/editdetail/:id');
		};
		$scope.removeDetail = function (id) {
			detailSvc.removeDetail(id);
		};

	}]);