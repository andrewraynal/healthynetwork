'use strict';
app.controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['userSvc', '$location', '$rootScope'];
    function registerCtrl(userSvc, $location, $rootScope) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            userSvc.Create(vm.user)
                .then(function (response) {
                    if (response.success) {
                        console.log('Registration successful');
                        $location.path('/login');
                    } else {
                        console.log("failed")
                        vm.dataLoading = false;
                    }
                });
        }
    }
