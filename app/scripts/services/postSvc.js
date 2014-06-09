angular.module('ahealthynetworkApp')
	.factory('PostSvc', function ($resource){
		return $resource('http://ahealthynetworkapp.firebaseio.com/:id',
		{
			id: '@_id'
		},
		{
			showPost: { method: 'GET'	},
			editPost: { method: 'PUT'	}, 
			deletePost: { method: 'DELETE' }
		});
	});