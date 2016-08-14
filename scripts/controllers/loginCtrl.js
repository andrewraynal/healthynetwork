'use strict';
app.controller('loginCtrl', loginCtrl);

   loginCtrl.$inject = ['$location', 'authSvc'];
   function loginCtrl($location, authSvc) {
       var vm = this;
       vm.login = login;

       (function initController() {
           // reset login status
           authSvc.ClearCredentials();
       })();

       function login() {
         console.log("INSIDE NOW");
           vm.dataLoading = true;
           authSvc.Login(vm.username, vm.password, function (response) {
               if (response.success) {
                 console.log(response)
                   authSvc.SetCredentials(vm.username, vm.password);
                   $location.path('/home');
               } else {
                   console.log("failed response");
                   console.log(response)
                   vm.dataLoading = false;
               }
           });
       };
   }
