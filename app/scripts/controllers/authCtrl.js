'use strict';

app.controller('authCtrl',
<<<<<<< HEAD
  function ($scope, $location, Auth, User) {
    if (Auth.signedIn()) {
      $location.path('/');
    }
    $scope.$on('$firebaseSimpleLogin:login', function () {
      $location.path('/users/:username');
    });
    $scope.login = function () {
      Auth.login($scope.user).then(function () {
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
=======
    function ($scope, $location, Auth, User) {
      if (Auth.signedIn()) {
        $location.path('/');
      }

      $scope.$on('$firebaseSimpleLogin:login', function () {
        $location.path('/');
>>>>>>> parent of e8a2ef6... eh
      });

      $scope.login = function () {
        Auth.login($scope.user).then(function () {
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
