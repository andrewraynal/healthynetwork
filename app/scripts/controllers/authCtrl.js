'use strict';

app.controller('authCtrl',
    function ($scope, $location, Auth, User) {
      if (Auth.signedIn()) {
        $location.path('/profile');
      }

      $scope.$on('$firebaseSimpleLogin:login', function () {
        $location.path('/profile');
      });

      $scope.login = function () {
        Auth.login($scope.user).then(function () {
          console.log($scope.user);
          $location.path('/profile');
        }, function (error) {
          $scope.error = error.toString();
        });
      };

      $scope.register = function () {
        Auth.register($scope.user).then(function (authUser) {
          User.create(authUser, $scope.user.username);
          $location.path('/profile');
        }, function (error) {
          $scope.error = error.toString();
        });
      };
    });
