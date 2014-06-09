'use strict';
angular.module('ahealthynetworkApp')
	.factory('DetailsSvc', function ($resource){
		return $resource('https://ahealthynetwork.firebaseio.com/userdetails', {},
				{
					query: {  method: 'GET',
						isArray: false
					},
					createDetail: {
						method: 'POST'
					}
				});
	});