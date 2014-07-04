'use strict';
app.factory("chatSvc", ["$firebase", function($firebase) {
    	var chatRef = new Firebase("https://ahealthynetwork.firebaseio.com/chat");
    	return $firebase(chatRef);

      var messages = $firebase(chatRef);

      var chatSvc = {
        all: messages,
        create: function (message) {
          if (User.signedIn()) {
            var user = User.getCurrent();

            message.owner = user.username;
    
            return messages.$add(message).then(function (ref) {
              var messageId = ref.name();

              user.$child('messages').$child(messageId).$set(messageId);

              return messageId;
            })
          }
        },
        find: function (messageId) {
          return messages.$child(messageId);
        },
        delete: function (messageId) {
          if (User.signedIn()) {
            var message = message.find(messageId);

            message.$on('loaded', function () {
              var user = User.findByUsername(message.owner);

              messages.$remove(messageId).then(function () {
                user.$child('messages').$remove(messageId);
              })
            })
          }
        }
      };
          return chatSvc;
          return messageId;
	  	}])