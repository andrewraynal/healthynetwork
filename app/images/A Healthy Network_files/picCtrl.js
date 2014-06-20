'use strict';

angular.module('ahealthynetworkApp')
  .controller('picCtrl', ['$scope', 'instagram', function ($scope, instagram){
    
    $scope.layout = 'grid';

    $scope.setLayout = function(layout){
      $scope.layout = layout;
    };

    $scope.isLayout = function(layout){
      return $scope.layout == layout;
    };

    $scope.pics = [];

    instagram.getPic(function(data){

      $scope.pics = data;
    });
  }]);