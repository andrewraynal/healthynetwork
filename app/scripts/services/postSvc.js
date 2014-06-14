angular.module('ahealthynetworkApp')
	.factory('PostSvc', function ($resource){
		return $resource('http://ahealthynetworkapp.firebaseio.com/journal:id',
		{
			id: '@_id'
		},
		{
			showPost: { method: 'GET'	},
			editPost: { method: 'PUT'	}, 
			deletePost: { method: 'DELETE' }
		});
	});