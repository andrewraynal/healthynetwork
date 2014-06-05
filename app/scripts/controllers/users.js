'use strict';

angular.module('healthynetworkApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.createUser = function() {
    	$location.path('/newuser');
    };
    $scope.newUser = function(user) {
    	UsersSvc.create(user);
    	$location.path('/users');
    };
    $scope.users = UsersSvc.query();
   })
  .controller('UserCtrl', function ($scope, $location, $routeParams, UserSvc){
  	$scope.user = UserSvc.showUser({ id: $routeParams.id });
  	$scope.delete = function() {
  		UserSvc.delete({ id: $routeParams.id });
  		$location.path('/users');
  	};
  	$scope.edit = function() {
  		UserSvc.edit($scope.user);
  		$location.path('/users');
  	}
  });
