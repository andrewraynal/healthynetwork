'use strict';

app.factory('activity', ['$http', function($http){
	var getResults;
	 return {
		async: function() {
			getResults = $http.jsonp('http://api.amp.active.com/v2/search?&cb=displayResults&api_key=jcwjug7ryzbfgwg3zu96ggqw').then(function(data){
				return data;	
			});

			return getResults;
		}
	};
}]);