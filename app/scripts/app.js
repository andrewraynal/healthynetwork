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
        controller: 'journalCtrl'
     })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FBURL', 'https://ahealthynetwork.firebaseio.com/');
angular.module('ahealthynetworkApp.directives', []);

