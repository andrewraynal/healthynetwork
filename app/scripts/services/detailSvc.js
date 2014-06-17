'use strict';
var app = angular.module('ahealthynetworkApp');
 app.factory('Detail', 
    function ($firebase, FBURL, User) {
      var ref = new Firebase(FBURL + 'details');

      var details = $firebase(ref);

  var Detail = {
    all: details,
    create: function (detail) {
      if (User.signedIn()) {
        var user = User.getCurrent();
      
        detail.owner = user.username;
        detail.date = Date.now();
        detail.firstname = detail.firstname;
        detail.lastname = detail.lastname;
        detail.location = detail.location;
        detail.gender = detail.gender;
        detail.age = detail.age; 
        detail.personalmsg = detail.personalmsg;

        return details.$add(detail).then(function (ref) {
          var detailId = ref.name();

          user.$child('details').$child(detailId).$set(detailId);

          return detailId;

        });
      }
    },
    find: function (detailId) {
      return details.$child(detailId);
    },
    delete: function (detailId) {
      if (User.signedIn()) { 
        var detail = Detail.find(detailId);

        detail.$on('loaded', function () {
          var user = User.findByUsername(detail.owner);

          details.$remove(detailId).then(function () {
            user.$child('details').$remove(detailId);
          });
         });
        }
      }
    };

    return Detail;
  });










  // 'use strict';

  // angular.module('ahealthynetworkApp')
  // .factory('detailSvc', ['$firebase', 'FBURL', function($firebase, FBURL) {
  //     var ref = new Firebase(FBURL);

  //     var details = $firebase(ref);

  //     var getDetails = function() {
  //       return details;
  //     };
        
  //     var addDetail = function(detail) {
  //       details.$add(detail);
  //     };

  //      var removeDetail = function (id) {
  //       details.$remove(id)
  //       };

  //     var updateDetail = function (id) {
  //       details.$save(id);
  //     };

  //     return {
  //       getDetails: getDetails,
  //       addDetail: addDetail,
  //       updateDetail: updateDetail,
  //       removeDetail: removeDetail
  //     }
  //   }]);