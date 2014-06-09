'use strict';
angular.module('ahealthynetworkApp')
	.factory('DetailSvc', function ($resource){
		return $resource('https://ahealthynetwork.firebaseio.com/userdetails/:id',
		{
				id: '@_id'
		},
		{
				showDetail: { method: 'GET'	},
				editDetail: {	method: 'PUT'	},
				deleteDetail: { method: 'DELETE' }

		});
	});