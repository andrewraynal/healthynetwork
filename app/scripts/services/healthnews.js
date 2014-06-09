angular.module('ahealthynetworkApp')
	.factory('PostSvc', function ($resource){
		return $resource('https://api.instagram.com/oauth/authorize/?client_id=CLIENT-ID&redirect_uri=REDIRECT-URI&response_type=code',
		{
			id: '@_id'
		},
		{
			showPost: { method: 'GET'	},
			editPost: { method: 'PUT'	}, 
			deletePost: { method: 'DELETE' }
		});
	});