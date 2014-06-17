'use strict'
angular.module('ahealthynetworkApp')
		.factory('uploadSvc', ['$firebase', 'FBURL', function($firebase, FBURL){
				var ref = new Firebase(FBURL);
				var Images = $firebase(ref);
				
					var getImages = function(){
							return Images;
					};
					var newImage = function(image){
							Images.$add(image);
					};
					var removeImage = function(id){
							Images.$remove(id);
					};
				
					return {
							getImages: getImages,
							newImage: newImage,
							removeImage: removeImage
						}

				}]);