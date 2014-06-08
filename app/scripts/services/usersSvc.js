angular.module('healthynetworkApp')
	.factory('UsersSvc', function ($resource){
		return $resource('http://healthynetworkapp.firebaseio.com', {},
				{
					getMyInfo: {
						method: 'GET',
						isArray: true
					},
					createNewInfo: {
						method: 'POST'
					}
				});
	});