'use strict';

  app.controller('navCtrl', 
  function ($scope, $location, Auth, User) {
  $scope.user = User.getCurrent();

  $scope.logout = function () {
  	Auth.logout();
  };
 });