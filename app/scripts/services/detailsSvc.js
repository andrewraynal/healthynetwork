'use strict';
angular.module('ahealthynetworkApp')
	.factory('DetailListSvc', function ($firebase, FBURL, User) {
		var ref = new Firebase(FBURL + 'detailLists');
		var detailLists = $firebase(ref);

		var DetailList = {
			all: detailLists, 
			create: function (detailList) {
				if (User.signedIn()) {
					var user = User.getCurrent();

					detailList.owner = user.username;

					return detailLists.$add(detailList).then(function (ref) {
						var detailListId = ref.name();

						user.$child('detailLists').$child(detailListId).$set(detailListId);

					return detailListId;
					});
				}
			},
			find: function (detailListId) {
				return detailLists.$child(detailListId);
			},
			update: function (detailListId) {
				detailList.$save(detailList);
			},
			delete: function (detailListId) {
				if (User.signedIn()) {
					var detailList = DetailList.find(detailListId);

					detailList.$on('loaded', function () {
						var user = User.findByUsername(detailList.owner);

					detailLists.$remove(detailListId).then(function () {
						user.$child('detailLists').$remove(detailListId);
						});
					});
				}
			}
		};
		return 
			DetailList;
		});







	// .factory('DetailListsSvc', function ($resource){
	// 	return $resource('https://ahealthynetwork.firebaseio.com/userdetails', {},
	// 			{
	// 				query: {  method: 'GET',
	// 					isArray: false
	// 				},
	// 				createDetailList: {
	// 					method: 'POST'
	// 				}
	// 			});
	// });