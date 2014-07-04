 'use strict';

angular.module('ahealthynetworkApp.firechat', ['firechat'])
 	.factory('chatRef', function (

 var chatRef = new Firebase('https://ahealthynetwork.firebaseio.com/chat');
 
 	var chat = new FirechatUI(chatRef, document.getElementById("firechat-wrapper"));
  		chat.setUser('<user-id>', '<display-name>');

  $('#chatInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#chatInput').val();
      chatRef.push({name:name, text:text});
      $('#chatInput').val('');
    }
  });

  // Add a callback that is triggered for each chat chat.
  chatRef.limit(10).on('child_added', function (snapshot) {
    var chat = snapshot.val();
    $('<div/>').text(chat.text).prepend($('<em/>')
      .text(chat.name+': ')).appendTo($('#chatsDiv'));
    $('#chatsDiv')[0].scrollTop = $('#chatsDiv')[0].scrollHeight;
  });