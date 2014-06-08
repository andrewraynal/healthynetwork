angular.module('healthynetworkApp')
	.factory('PostsSvc', function ($resource){
		return $resource('http://healthynetworkapp.firebaseio.com', {},
		{

				getPosts: {
					method: 'GET',
					isArray: true
				},
				createNewPost: {
					method: 'POST'
				}
		});
	});