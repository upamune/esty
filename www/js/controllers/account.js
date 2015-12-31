/**
 *
 * Created by upamune on 15/12/31.
 */

app .controller('AccountCtrl', function($scope, Auth) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function() {
    "use strict";
    Auth.logout();
  }
});
