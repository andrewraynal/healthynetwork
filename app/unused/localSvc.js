'use strict';

angular.module('ahealthynetworkApp')
	.factory('tumblr', ['$http', function($http){

		return {
			getLocal: function(callback){

				var endPoint = "http://api.tumblr.com/v2/api_key=KCb5iXX9VO8FRh1a8wg1w2CIl0wBDLcnXqddSwIpOk8V6lLjAU
";

				$http.jsonp(endPointActive).success(function(response){
					callback(response.data);
				});				
			}
		}
	}]);