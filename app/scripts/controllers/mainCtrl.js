'use strict';

app.controller('mainCtrl', function ($scope, $location) {
      $scope.login = function(view) {
     $location.path('/login')
        };
      $scope.register = function(view) {
        $location.path('/register')
        };
});
 