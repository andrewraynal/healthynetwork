'use strict';

angular.module('ahealthynetworkApp')
  .controller('ActiveCtrl', 
	function ($scope, $http) {
		$http.get('http://api.amp.active.com/search?v=json&l=92104&api_key=ghf2epg3nqwjm43smh96bc4b')
			.success(function (data) {
				$scope.activities = data;
	})
});
