'use strict';

angular.module('ahealthynetworkApp')
	.factory('healthfinder', ['$http', function($http){
	var getResults;
	 return {
		async: function() {
			getResults = $http.jsonp('http://www.healthfinder.gov/developers/Search.json?api_key=ldaefgwbdoehgifb&keyword=life&callback=JSON_CALLBACK').then(function(data){
				return data;	
			});

			return getResults;
		}
	};
}]);