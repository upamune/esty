/**
 * Created by upamune on 15/12/31.
 */

app.controller('ChatsCtrl', function($scope, Chats, Products) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

  $scope.image = "http://41.media.tumblr.com/6eb2f8cff8709d78532c70970fb9cdeb/tumblr_n6aqonscPV1qaysjmo1_500.jpg";

  $scope.button = function(product) {
    "use strict";

    console.log('button was clicked', product, $scope.image);

    Products.saveProduct(product, $scope.image);
  }
});
