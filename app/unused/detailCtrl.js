'use strict';

angular.module('ahealthynetworkApp')
  .controller('DetailListsCtrl', function ($scope, $location, DetailListsSvc) {
    $scope.createDetailList = function() {
    	$location.path('/newdetails');
    };
    $scope.newDetailList = function(detailList) {
    	DetailListsSvc.createDetailList(detailList);
    	$location.path('/userhome');
    };
    $scope.detailLists = DetailListsSvc.query();
   })
  .controller('DetailListCtrl', function ($scope, $location, $routeParams, DetailListSvc){
  	$scope.detailList = DetailListSvc.showDetailList({ id: $routeParams.id });
  	$scope.deleteDetailList = function() {
  		DetailListSvc.deleteInfo({ id: $routeParams.id });
  		$location.path('/userhome');
  	};
  	$scope.editDetailList = function() {
  		DetailListSvc.editDetailList($scope.detailList);
  		$location.path('/userhome');
  	}
  $scope.gender = ['male', 'female'];
  $scope.privacysettings = ['Private', 'Semi-private', 'Public'];
  });
