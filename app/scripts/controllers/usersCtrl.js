'use strict';

angular.module('healthynetworkApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.createUser = function() {
    	$location.path('/newuser');
    };
    $scope.newUser = function(user) {
    	UsersSvc.createNewInfo(user);
    	$location.path('/userhome');
    };
    $scope.users = UsersSvc.query();
   })
  .controller('UserCtrl', function ($scope, $location, $routeParams, UserSvc){
  	$scope.user = UserSvc.showInfo({ id: $routeParams.id });
  	$scope.deleteInfo = function() {
  		UserSvc.deleteInfo({ id: $routeParams.id });
  		$location.path('/userhome');
  	};
  	$scope.editInfo = function() {
  		UserSvc.editInfo($scope.user);
  		$location.path('/userhome');
  	}
  });
