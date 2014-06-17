  'use strict';

  angular.module('ahealthynetworkApp')
  .factory('detailSvc', ['$firebase', 'FBURL', function($firebase, FBURL) {
      var ref = new Firebase(FBURL);

      var details = $firebase(ref);

      var getDetails = function() {
        return details;
      };
        
      var addDetail = function(detail) {
        details.$add(detail);
      };

       var removeDetail = function (id) {
        details.$remove(id)
        };

      var updateDetail = function (id) {
        details.$save(id);
      };

      return {
        getDetails: getDetails,
        addDetail: addDetail,
        updateDetail: updateDetail,
        removeDetail: removeDetail
      }
    }]);