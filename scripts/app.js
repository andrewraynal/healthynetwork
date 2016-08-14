'use strict';
/* global app: true */

var app = angular.module('balancedApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ui.bootstrap.tpls',
    'balancedApp.directives'
]);
app.config(function ($routeProvider) {
    $routeProvider
      //  .when('/', {
      //   templateUrl: 'views/main-login.html',
      //   controller: 'mainCtrl'
      // })
        .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
      })
         .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'registerCtrl',
        controllerAs: 'vm'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
     .when('/create-details', {
        templateUrl: 'views/create-details.html',
        controller: 'detailsCtrl',
        controllerAs: 'vm'

      })
     .when('/details', {
        templateUrl: 'views/details.html',
        controller: 'detailsCtrl',
        controllerAs: 'vm'

      })
     .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'postsCtrl',
        controllerAs: 'vm'

      })
     .when('/chat', {
      templateUrl: 'views/chat.html',
      controller: 'chatCtrl'
     })
      .otherwise({
        redirectTo: '/'
      });
  })

  app.run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
   function run($rootScope, $location, $cookieStore, $http) {
       // keep user logged in after page refresh
       $rootScope.globals = $cookieStore.get('globals') || {};
       if ($rootScope.globals.currentUser) {
           $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
       }
       $rootScope.$on('$locationChangeStart', function (event, next, current) {
           // redirect to login page if not logged in and trying to access a restricted page
           var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
           var loggedIn = $rootScope.globals.currentUser;
           if (restrictedPage && !loggedIn) {
               $location.path('/login');
           }
       });
       $rootScope.$emit('loaded', function () {
         console.log('============== app loaded =============');
       });

   }
angular.module('balancedApp.directives', []);
