angular.module('ahealthynetworkApp')
	.factory('PostsSvc', function ($resource){
		return $resource('http://ahealthynetworkapp.firebaseio.com', {},
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