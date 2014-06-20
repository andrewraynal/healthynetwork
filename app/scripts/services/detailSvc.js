'use strict';

angular.module('ahealthynetworkApp') 
  .factory('Detail',
    function ($firebase, User, FBURL) {
      var ref = new Firebase(FBURL + 'details');

      var details = $firebase(ref);

      var Detail = {
        all: details,
        create: function (detail) {
          if (User.signedIn()) {
            var user = User.getCurrent();

            detail.owner = user.username;
                console.log(user.username);
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