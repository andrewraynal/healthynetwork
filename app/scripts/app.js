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
    'simpleLoginTools',
    'ahealthynetworkApp.directives'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
       .when('/main', {
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
       .when('/register', {
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
      .when('/userhome', {
        templateUrl: 'views/userhome.html',
        controller: 'authCtrl'
      })
     .when('/newdetails', {
        templateUrl: 'views/newdetails.html',
        controller: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FBURL', 'https://ahealthynetwork.firebaseio.com/');
angular.module('ahealthynetworkApp.directives', []);

