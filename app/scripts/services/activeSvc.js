'use strict';

angular.module('ahealthynetworkApp')
  .factory('activeSvc', function($resource) {
     return function(fileName){
       return $resource(fileName, {});
     };
  });