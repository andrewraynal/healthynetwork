'use strict';

angular.module('ahealthynetworkApp')
  .controller('healthfinderCtrl', ['$scope', 'healthfinder', function ($scope, healthfinder){
  
    healthfinder.async().then(function(data){
      $scope.news = data.data;
        console.log($scope.news)

  });
}]);
