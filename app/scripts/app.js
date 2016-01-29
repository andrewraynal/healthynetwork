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
      //  .when('/', {
      //   templateUrl: 'views/main-login.html',
      //   controller: 'mainCtrl'
      // })
        .when('/', {
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
      //    .when('/register', {
      //   templateUrl: 'views/register.html',
      //   controller: 'authCtrl'
      // })
      .when('/users/:username', {
        templateUrl: 'views/main-user-page.html',
        controller: 'profileCtrl'
      })
     .when('/create-details', {
        templateUrl: 'views/create-details.html',
        controller: 'detailsCtrl'
      })
     .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl'
      })
     .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'postsCtrl'
      })
     .when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'chatCtrl'
     })
      .otherwise({
        redirectTo: '/'
      });
  })
angular.module('ahealthynetworkApp.directives', []);

