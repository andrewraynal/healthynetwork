'use strict';

angular
  .module('healthynetworkApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'angularfire.firebase',
    'angularfire.login',
    'simpleLoginTools'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/newuser', {
        templateUrl: 'views/new-user.html',
        controller: 'UserCtrl'
      })
      .when('/userhome', {
        templateUrl: 'views/user-home.html',
        controller: 'UserCtrl'
      })
       .when('/useredit', {
        templateUrl: 'views/user-edit.html',
        controller: 'UsersCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
