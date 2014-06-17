'use strict';

angular.module('ahealthynetworkApp')
  .controller('uploadCtrl',['$scope', '$location', 'uploadSvc', function ($scope, $location, uploadSvc) {
    $scope.Images = uploadSvc.getImages();
        $scope.newImage = { photo: "" };

        $scope.addImage = function(newImage) {
    	   uploadSvc.newImage(newImage);
    	   $location.path('/detailList');
        };

        $scope.removeImage = function(imageId) {
    	   uploadSvc.removeImage(imageId);
        };

  
  }]);