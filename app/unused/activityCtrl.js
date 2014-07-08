'use strict';

app.controller('activityCtrl', ['$scope', 'activity', function ($scope, activity){
  
    activity.async().then(function(data){

      		$scope.results = data.data.Result.Topics;
        		console.log($scope.results);
       		// $scope.result = $scope.news.Result.Topics;
       		// 	console.log($scope.result);
       		$scope.quantity = 15;
  });
}]);
