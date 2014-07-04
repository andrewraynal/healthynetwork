'use strict';

app.controller('loginCtrl', 
  function ($scope, simpleLogin, $firebaseSimpleLogin, FBURL) {

    $scope.Login = $firebaseSimpleLogin(new Firebase(FBURL));
      $scope.newUser = { email: '', password: '' };
      $scope.currentUser = null;

      $scope.login = function(email, password) {
      $scope.Login.$login('password', {email: email, password: password})
        .then(function(user) {
          $scope.currentUser = user;
          $scope.resetForm();
        });
        console.log("i'm logged");
    };
      $scope.register = function(email, password) {
        $scope.Login.$createUser(email, password)
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
 