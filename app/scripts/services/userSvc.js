angular.module('healthynetworkApp')
	.factory('UserSvc', function ($resource){
		return $resource('http://healthnetworkapp.firebaseio.com/:id',
		{
				id: '@_id'
		},
		{
				showInfo: { method: 'GET'	},
				editInfo: {	method: 'PUT'	},
				deleteInfo: { method: 'DELETE' }

		});
	});