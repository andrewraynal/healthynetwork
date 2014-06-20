'use strict';
var app = angular.module('ahealthynetworkApp');
    app.factory('Journal', 
        function ($firebase, FBURL, User) {
      var ref = new Firebase(FBURL + 'journals');

      var journals = $firebase(ref);

  var Journal = {
    all: journals,
    create: function (journal) {
      if (User.signedIn()) {
        var user = User.getCurrent();
      
        journal.owner = user.username;

        return journals.$add(journal).then(function (ref) {
            var journalId = ref.name();

        user.$child('journals').$child(journalId).$set(journalId);

            return journalId;
        });
      }
    },
    find: function (journalId) {
      return journals.$child(journalId);
    },
    delete: function (journalId) {
      if (User.signedIn()) { 
        var journal = Journal.find(journalId);

        journal.$on('loaded', function () {
          var user = User.findByUsername(journal.owner);

          journals.$remove(journalId).then(function () {
            user.$child('journals').$remove(journalId);
          });
         });
        }
      },
        addMessage: function (journalId, message) {
          if (User.signedIn()) {
            var user = User.getCurrent();

            message.username = user.username;
            message.journalId = journalId;

            journals.$child(journalId).$child('messages').$add(message).then(function (ref) {
              user.$child('messages').$child(ref.name()).$set({id: ref.name(), journalId: journalId});
            });
          }
        },
        deleteMessage: function (journal, message, messageId) {
          if (User.signedIn()) {
            var user = User.findByUsername(message.username);

            journal.$child('messages').$remove(messageId).then(function () {
              user.$child('messages').$remove(messageId);
            });
          }
        },
      };

    return Journal;
  });