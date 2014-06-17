'use strict';

angular.module('ahealthynetworkApp')
    .controller('updateCtrl', ['$scope', '$location', function ($scope, $location) {
    
    ahealthynetworkApp.run(function($rootScope) {
        $rootScope.geoLocation = {status: "LOCATING"}
        navigator.geolocation.getCurrentPosition(function(location) {
        //Success callback
        $rootScope.geoLocation.coords = location.coords;
        $rootScope.geoLocation.status = "AVAILABLE";
        console.log(angular.toJson($rootScope.geoLocation));
    }, function(positionError) {
        //ERROR callback
        console.log("ERROR : " + angular.toJson(positionError));
        $rootScope.$apply(function() {
            $rootScope.geoLocation.status = "UNAVAILABLE";
        }); 
    }); 
});                   
}]);