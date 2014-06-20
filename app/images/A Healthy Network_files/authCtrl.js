'use strict';

angular.module('ahealthynetworkApp')
  .controller('authCtrl',
    function ($scope, $location, Auth, User) {
      if (Auth.signedIn()) {
        $location.path('/');
      }

      $scope.$on('$firebaseSimpleLogin:login', function () {
        $location.path('/');
      });

      $scope.login = function () {
        Auth.login($scope.user).then(function () {
          $location.path('/profilepage');
        }, function (error) {
          $scope.error = error.toString();
        });
      };

      $scope.register = function () {
        Auth.register($scope.user).then(function (authUser) {
          User.create(authUser, $scope.user.username);
          $location.path('/');
        }, function (error) {
          $scope.error = error.toString();
        });
      };
      $scope.custom = true;
      $scope.custom1 = true;
    });