'use strict';

angular.module('ahealthynetworkApp')
  .controller('HealthCtrl', ['$scope', 'instagram', function ($scope, instagram){
    
    $scope.layout = 'grid';

    $scope.setLayout = function(layout){
      $scope.layout = layout;
    };

    $scope.isLayout = function(layout){
      return $scope.layout == layout;
    };

    $scope.pics = [];

    instagram.getHealth(function(data){

      $scope.pics = data;
    });
  }]);