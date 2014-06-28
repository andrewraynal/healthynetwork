'use strict';
/* global app: true */

var app = angular
  .module('ahealthynetworkApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'angularfire.firebase',
    'angularfire.login',
    'simpleLoginTools',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'ahealthynetworkApp.directives'
]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main-login.html',
        controller: 'authCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register-form.html',
        controller: 'authCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login-form.html',
        controller: 'authCtrl'
      })
      .when('/users/:username', {
        templateUrl: 'views/profile-page.html',
        controller: 'profileCtrl'
      })
     .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl'
      })
     .when('/create-details', {
        templateUrl: 'views/create-details.html',
        controller: 'detailsCtrl'
      })
     .when('/details/:detailId', {
        templateUrl: 'views/profile-page.html',
        controller: 'detailviewCtrl'
      })
     .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'postsCtrl'
      })
     .when('/posts/:postId', {
        templateUrl: 'views/profile-page.html',
        controller: 'postviewCtrl'
     })

      .otherwise({
        redirectTo: '/'
      });
  })
angular.module('ahealthynetworkApp.directives', []);

