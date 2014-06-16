angular.module('ahealthynetworkApp')
	.factory('postsSvc', function ($resource){
		return $resource('http://ahealthynetworkapp.firebaseio.com/journal', {},
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