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
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'postsCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register-form.html',
        controller: 'authCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login-form.html',
        controller: 'authCtrl'
      })
       .when('/show-details', {
        templateUrl: 'views/show-details.html',
        controller: 'detailCtrl'
      })
      .when('/users/:username', {
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl'
      })
     .when('/detail-list', {
        templateUrl: 'views/detail-list.html',
        controller: 'detailCtrl'
      })
     .when('/posts/:postId', {
        templateUrl: 'views/show-posts.html',
        controller: 'postviewCtrl'
     })

      .otherwise({
        redirectTo: '/'
      });
  })
angular.module('ahealthynetworkApp.directives', []);

