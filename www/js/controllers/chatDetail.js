/**
 *
 * Created by upamune on 15/12/31.
 */

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
