'use strict';

angular.module('healthynetworkApp')
    .controller('alertCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    	$rootScope.alert = {'You are mistaken.  Try another email and/or password'};
    	if ($scope.details === undefined)
    		return alert;
  }
]);
