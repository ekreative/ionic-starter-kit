angular.module('starter')

    .controller('DashCtrl', () => {})

    .controller('ChatsCtrl', (Chats) => {
        this.chats = Chats.all();
        this.remove = (chat) => {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', ($stateParams, Chats) => {
        this.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', () => {
        this.settings = {
            enableFriends: true
        };
    });
