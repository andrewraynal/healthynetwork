'use strict';

angular.module('ahealthynetworkApp')
  .controller('LocalCtrl', ['$scope', 'active', function ($scope, active){
    
    $scope.layout = 'grid';

    $scope.setLayout = function(layout){
      $scope.layout = layout;
    };

    $scope.isLayout = function(layout){
      return $scope.layout == layout;
    };

    $scope.details = [];

    active.getLocal(function(data){

      $scope.details = data;
    });
  }]);