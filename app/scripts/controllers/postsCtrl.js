'use strict';

angular.module('ahealthynetworkApp')
  .controller('PostsCtrl', function ($scope) {
    $scope.createPost = function() {
    	$location.path('/newpost');
    };
    $scope.newPost = function(post) {
    	PostsSvc.create(post);
    	$location.path('/posts');
    };
    $scope.posts = PostsSvc.query();
   })
  .controller('PostCtrl', function ($scope, $location, $routeParams, PostSvc){
  	$scope.post = PostSvc.showUser({ id: $routeParams.id });
  	$scope.delete = function() {
  		PostSvc.delete({ id: $routeParams.id });
  		$location.path('/posts');
  	};
  	$scope.edit = function() {
  		PostSvc.edit($scope.post);
  		$location.path('/posts');
  	}
  });