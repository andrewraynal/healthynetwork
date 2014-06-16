'use strict';

angular.module('ahealthynetworkApp')
	.controller('detailCtrl', function ($scope, Detail) {
		$scope.details = Detail.all;

		$scope.detail = {content: '', title: ''};

		$scope.submitDetail = function () {
		  Detail.create($scope.detail).then(function (detailId) {
		    $location.path('/detailList/' + detailId);
		    $scope.detail = {content: '', title: ''};
		  });
		};

		$scope.deleteDetail = function (detailId) {
			Detail.delete(detailId);
		};

	});


// 'use strict';

// angular.module('ahealthynetworkApp')
// 	.controller('detailCtrl', function ($scope, $location, detailListSvc) {
// 		$scope.detailList = {firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: '', privacy: ''};


// 		$scope.submitDetailList = function () {
// 			console.log($scope.detailList);
// 			detailListSvc.create($scope.detailList).then(function (detailList) {
// 				$location.path('/userhome/' + detailListId);
// 			$scope.detailList = { firstname: '', lastname: '', location: '', gender: '', age: '', personalmsg: '', privacy: ''};	
// 			});
// 		};
// 		$scope.getByDetailListId = function (detailListId) {
// 			detailListSvc.get($scope.detailListId).then(function (detailList) {
// 				$location.path('/detailList/' + detailListId);
// 			});
// 		};
// 		$scope.updateDetailList = function (detailListId) {
// 			detailListSvc.update(detailListId);
// 		};
// 		$scope.deleteDetailList = function (detailListId) {
// 			detailListSvc.delete(userId);
// 		};
// 	});