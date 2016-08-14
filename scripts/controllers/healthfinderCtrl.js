'use strict';

app.controller('healthfinderCtrl', ['$scope', 'healthfinder', function ($scope, healthfinder){
  
    healthfinder.async().then(function(data){

      		$scope.results = data.data.Result.Topics;
        		console.log($scope.results);
       		// $scope.result = $scope.news.Result.Topics;
       		// 	console.log($scope.result);
       		$scope.quantity = 8;
  });
     $scope.layout = 'grid';

    $scope.setLayout = function(layout){
      $scope.layout = layout;
    };

    $scope.isLayout = function(layout){
      return $scope.layout == layout;
    };
}]);
