'use strict';
var app = angular.module('ahealthynetworkApp');
    app.factory('Journal', 
        function ($firebase, FBURL, User) {
      var ref = new Firebase(FBURL + 'messages');

      var messages = $firebase(ref);

  var Journal = {
    all: messages,
    create: function (message) {
      if (User.signedIn()) {
        var user = User.getCurrent();
      
        journal.owner = user.username;
        message.date = Date.now();
        message.content = message.content;

        return messages.$add(message).then(function (ref) {
            var messageId = ref.name();

        user.$child('messages').$child(messageId).$set(messageId);

            return messageId;

        });
      }
    },
    find: function (messageId) {
      return messages.$child(messageId);
    },
    delete: function (messageId) {
      if (User.signedIn()) { 
        var message = Journal.find(messageId);

        message.$on('loaded', function () {
          var user = User.findByUsername(message.owner);

          messages.$remove(messageId).then(function () {
            user.$child('messages').$remove(messageId);
          });
         });
        }
      }
    };

    return Journal;
  });