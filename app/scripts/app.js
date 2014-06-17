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
        authRequired: true,
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
       .when('/login', {
        authRequired: true,
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
      .when('/userhome', {
        authRequired: true,
        templateUrl: 'views/userhome.html',
        controller: 'authCtrl'
      })
     .when('/newlocation', {
        authRequired: true,
        templateUrl: 'views/newlocation.html',
        controller: 'geoCtrl'
      })
     .when('/newdetails', {
        authRequired: true,
        templateUrl: 'views/newdetails.html',
        controller: 'detailCtrl'
      })
     .when('/detailList', {
        authRequired: true,
        templateUrl: 'views/detailList.html',
        controller: 'detailCtrl'
      })
     .when('/editdetails', {
        authRequired: true,
        templateUrl: 'views/editdetail.html',
        controller: 'detailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FBURL', 'https://ahealthynetwork.firebaseio.com/');
angular.module('ahealthynetworkApp.directives', []);

