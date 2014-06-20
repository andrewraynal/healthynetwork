'use strict';

angular.module('ahealthynetworkApp')
  .controller('authCtrl',
    function ($scope, $location, Auth, User) {
      if (Auth.signedIn()) {
        console.log($scope.user);
        $location.path('/');
      }

      $scope.$on('$firebaseSimpleLogin:login', function () {
        $location.path('/profilepage');
      });

      $scope.login = function () {
        Auth.login($scope.user).then(function () {
          console.log($scope.user);
          $location.path('/profilepage');
        }, function (error) {
          $scope.error = error.toString();
        });
      };

      $scope.register = function () {
        Auth.register($scope.user).then(function (authUser) {
          console.log($scope.user);
          User.create(authUser, $scope.user.username);
          $location.path('/showdetails');

        }, function (error) {
          $scope.error = error.toString();
        });
      };
      $scope.custom = true;
      $scope.custom1 = true;
    });
