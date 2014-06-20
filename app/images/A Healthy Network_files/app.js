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
    'ui.bootstrap',
    'ahealthynetworkApp.directives'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'authCtrl'
      })
       .when('/details/:detailId', {
        templateUrl: 'views/showdetails.html',
        controller: 'detailCtrl'
      })
      .when('/users/:username', {
        templateUrl: 'views/profilepage.html',
        controller: 'authCtrl'
      })
     .when('/detailList', {
        templateUrl: 'views/detailList.html',
        controller: 'detailCtrl'
      })
     .when('/editdetails', {
        templateUrl: 'views/editdetail.html',
        controller: 'detailCtrl'
      })
     .when('/journal', {
        templateUrl: 'views/journal.html',
        controller: 'navCtrl'
     })
      .otherwise({
        redirectTo: '/'
      });
  })
angular.module('ahealthynetworkApp.directives', []);

