'use strict';

angular.module('ahealthynetworkApp')
  .controller('LoginController', function($scope, simpleLogin, $firebaseSimpleLogin, FBURL) {
    $scope.custom = true;
    $scope.custom1 = true;

    $scope.loginService = $firebaseSimpleLogin(new Firebase(FBURL));
      $scope.newUser = { email: '', password: '' };
      $scope.currentUser = null;

      $scope.login = function(email, password) {
      $scope.loginService.$login('password', {email: email, password: password})
        .then(function(user) {
          $scope.currentUser = user;
          $scope.resetForm();
        });
        console.log("i'm logged");
    };
      $scope.register = function(email, password) {
        $scope.loginService.$createUser(email, password)
        .then(function(user){
          $scope.currentUser = user;
          $scope.resetForm();
        });
    };

    $scope.resetForm = function() {
      $scope.newUser = { email: '', password: '' };
    };
    
    $scope.logout = function() {
      simpleLogin.logout();
    };
});
 