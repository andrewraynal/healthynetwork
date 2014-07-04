'use strict';
app.controller('firechatCtrl', 
  function ($scope, $location, Auth, User) {
    if (Auth.signedIn()) {
        $location.path('/chat');
      }
    var auth = new FirebaseSimpleLogin(chatRef, function(err, user) {
      if (user) {
        chat.setUser(user.id, 'Password' + user.id.substr(0, 8));
        setTimeout(function() {
          chat.enterRoom({ id: roomId, name: roomName });
        }, 500);
      } else {
        auth.login('password');    
      }
    });
    });
