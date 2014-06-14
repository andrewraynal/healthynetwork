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
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
       .when('/main', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
       .when('/register', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthCtrl'
      })
      .when('/userhome', {
        templateUrl: 'views/userhome.html',
        controller: 'AuthCtrl'
      })
     .when('/newdetails', {
        templateUrl: 'views/newdetails.html',
        controller: 'DetailListCtrl'
      })
       .when('/editdetails', {
        templateUrl: 'views/editdetails.html',
        controller: 'DetailListCtrl'
      })
      //  .when('/postedit', {
      //   templateUrl: 'views/post-edit.html',
      //   controller: 'PostCtrl'
      // })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FBURL', 'https://ahealthynetwork.firebaseio.com/');