'use strict';

angular.module('ahealthynetworkApp')
  .controller('DetailsCtrl', function ($scope) {
    $scope.createDetail = function() {
    	$location.path('/newdetails');
    };
    $scope.newDetail = function(detail) {
    	DetailsSvc.createDetail(detail);
    	$location.path('/userhome');
    };
    $scope.details = DetailsSvc.query();
   })
  .controller('DetailCtrl', function ($scope, $location, $routeParams, DetailSvc){
  	$scope.detail = DetailSvc.showDetail({ id: $routeParams.id });
  	$scope.deleteDetail = function() {
  		DetailSvc.deleteInfo({ id: $routeParams.id });
  		$location.path('/userhome');
  	};
  	$scope.editDetail = function() {
  		DetailSvc.editDetail($scope.detail);
  		$location.path('/userhome');
  	}
  $scope.gender = ['male', 'female'];
  $scope.privacysettings = ['Private', 'Semi-private', 'Public'];
  });
