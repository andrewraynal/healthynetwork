'use strict';

app.controller('authCtrl',
    function ($scope, $location, Auth, User) {
      if (Auth.signedIn()) {
        $location.path('/');
      }

      $scope.$on('$firebaseSimpleLogin:login', function () {
        $location.path('/');
      });

      $scope.login = function () {
        Auth.login($scope.user).then(function () {
          console.log($scope.user);
          $location.path('/users/:username');
        }, function (error) {
          $scope.error = error.toString();
        });
      };

      $scope.register = function () {
        Auth.register($scope.user).then(function (authUser) {
          User.create(authUser, $scope.user.username);
          $location.path('/create-details');
        }, function (error) {
          $scope.error = error.toString();
        });
      };
    });
