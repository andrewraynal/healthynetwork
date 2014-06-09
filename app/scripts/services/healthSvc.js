'use strict';

angular.module('ahealthynetworkApp')
	.factory('instagram', ['$http', function($http){

		return {
			getHealth: function(callback){

				var endPoint = "https://api.instagram.com/v1/media/popular?client_id=16f327194561488aa675607ab602cb68&callback=JSON_CALLBACK";

				$http.jsonp(endPoint).success(function(response){
					callback(response.data);
				});				
			}
		}
	}]);