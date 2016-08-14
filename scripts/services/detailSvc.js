'use strict';

app.factory('detailSvc',
    function (userSvc) {

      var detailSvc = {
        create: function (detail) {
          if (User.signedIn()) {
            var user = userSvc.getCurrent();

            detail.owner = user.username;

            return details.$add(detail).then(function (ref) {
              var detailId = ref.name();

              user.$child('details').$child(detailId).$set(detailId);

              return detailId;
            })
          }
        },
        find: function (detailId) {
          return details.$child(detailId);
        },
        delete: function (detailId) {
          if (userSvc.signedIn()) {
            var detail = detailSvc.find(detailId);

            detail.$on('loaded', function () {
              var user =userSvc.GetByUsername(detail.owner);

              details.$remove(detailId).then(function () {
                user.$child('details').$remove(detailId);
              })
            })
          }
        }
      };
          return detailSvc;
      });
