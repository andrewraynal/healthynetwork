'use strict';
angular.module('ahealthynetworkApp')
	.factory('DetailListSvc', function ($resource){
		return $resource('https://ahealthynetwork.firebaseio.com/userdetails/:id',
		{
				id: '@_id'
		},
		{
				showDetailList: { method: 'GET'	},
				editDetailList: {	method: 'PUT'	},
				deleteDetailList: { method: 'DELETE' }

		});
	});