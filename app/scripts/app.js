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
      .when('/users/:username', {
        templateUrl: 'views/main-user-page.html',
        controller: 'chatCtrl'
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
        templateUrl: 'views/show-detail.html',
        controller: 'detailviewCtrl'
      })
     .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'postsCtrl'
      })
     .when('/posts/:postId', {
        templateUrl: 'views/show-posts.html',
        controller: 'postviewCtrl'
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

