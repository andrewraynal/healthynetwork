'use strict';

angular.module('ahealthynetworkApp')
	.controller('DetailListCtrl', function ($scope, $location, DetailListSvc) {
		if ($location.path() === '/userhome') {
			$scope.detailLists = DetailList.all;	
		}
		
		$scope.detailList = { firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: '', privacy: ''};


		$scope.submit = function () {
			DetailListSvc.create($scope.detailList).then(function (detailList) {
				$location.path('/userhome/' + detailListId);
			$scope.detailList = { firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: '', privacy: ''};	
			});
					$scope.detailList = '';
		};
		$scope.getByDetailListId = function (detailListId) {
			DetailListSvc.get($scope.detailListId).then(function (detailList) {
				$location.path('/detailList/' + detailListId);
			});
		};
		$scope.update = function (detailListId) {
			DetailListSvc.update(detailListId);
		};
		$scope.delete = function (detailListId) {
			DetailListSvc.delete(userId);
		};
	});