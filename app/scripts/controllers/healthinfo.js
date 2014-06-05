'use strict';

angular.module('healthynetworkApp')
  .controller('HealthInfoCtrl', function ($scope, $location, $routeParams, HealthInfoSvc){
  	$scope.healthinfo = HealthInfoSvc.showHealthInfo({ id: $routeParams.id });
  	$scope.delete = function() {
  		HealthInfoSvc.delete({ id: $routeParams.id });
  		$location.path('/healthinfo-feed');
  	}
  });