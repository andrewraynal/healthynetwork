'use strict';

angular.module('ahealthynetworkApp')
  .controller('healthfinderCtrl', ['$scope', 'healthfinder', function ($scope, healthfinder){
  
    healthfinder.async().then(function(data){

      		$scope.results = data.data.Result.Topics;
        		console.log($scope.results);
       		// $scope.result = $scope.news.Result.Topics;
       		// 	console.log($scope.result);
  });
}]);
