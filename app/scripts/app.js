'use strict';

angular
  .module('ahealthynetworkApp', [
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
        controller: 'LoginController'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/main.html',
        controller: 'LoginController'
      })
     .when('/newdetails', {
        templateUrl: 'views/newdetails.html',
        controller: 'DetailCtrl'
      })
      .when('/userhome', {
        templateUrl: 'views/userhome.html',
        controller: 'DetailCtrl'
      })
       .when('/useredit', {
        templateUrl: 'views/editdetails.html',
        controller: 'DetailsCtrl'
      })
       .when('/newpost', {
        templateUrl: 'views/newpost.html',
        controller: 'PostCtrl'
      })
      .when('/posts', {
        templateUrl: 'views/userhome.html',
        controller: 'PostCtrl'
      })
       .when('/postedit', {
        templateUrl: 'views/post-edit.html',
        controller: 'PostCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });