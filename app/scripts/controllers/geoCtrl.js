'use strict';

angular.module('ahealthynetworkApp')
  .controller('geoCtrl', function ($scope) {
    
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
});



// 'use strict';

// angular.module('ahealthynetworkApp')
//   .controller ('geoCtrl', function ($scope, $window) {
//     $scope.supportsGeo = $window.navigator;
//     $scope.position = null;
//     $scope.useGeoLocate = function() {
//         window.navigator.geolocation.getCurrentPosition(function(position) {
//             $scope.$apply(function() {
//                 $scope.position = position;
//             });
//         }, function(error) {
//             alert(error);
//         });
//     };
//   });