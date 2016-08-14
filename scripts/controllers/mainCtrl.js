'use strict';

app.controller('mainCtrl', function ($scope, $location) {
      $scope.login = function() {
     	$location.path('/login')
        };
      $scope.register = function() {
        $location.path('/register')
        };
});
 