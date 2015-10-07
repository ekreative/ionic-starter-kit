angular.module('starter')

    .controller('DashCtrl', function() {})

    .controller('ChatsCtrl', function(Chats) {
        this.chats = Chats.all();
        this.remove = function(chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function($stateParams, Chats) {
        this.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function() {
        this.settings = {
            enableFriends: true
        };
    });
