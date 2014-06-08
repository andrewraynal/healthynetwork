angular.module('healthynetworkApp')
	.factory('PostSvc', function ($resource){
		return $resource('http://healthynetworkapp.firebaseio.com/:id',
		{
			id: '@_id'
		},
		{
			showPost: { method: 'GET'	},
			editPost: { method: 'PUT'	}, 
			deletePost: { method: 'DELETE' }
		});
	});