/**
 * Created by upamune on 15/12/31.
 */

app.controller('LoginCtrl', function($scope, $state, $ionicPopup, Auth){
  "use strict";
  $scope.emailLogin = function() {
    console.log('button was clicked on login');
    $scope.user = {};

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      templateUrl: 'templates/partials/login.html',
      title: 'Signin',
      scope: $scope,
      buttons: [
        {
          text: '<b>Login</b>',
          type: 'button-energized',
          onTap: function(user) {
            user = $scope.user;
            console.log('the user is', user)
            Auth.login(user).then(function(){
              $state.go('tab.dash');
            }, function(err) {
              console.log('Error...', err);
            });
          }
        },
        {
          text: '<b>Register</b>',
          type: 'button-calm',
          onTap: function(user) {
            user = $scope.user;
            console.log('the user is ', user);
            Auth.register(user).then(function(){
              console.log('user was registered successfulley');
              $state.go('tab.dash');
            }, function(err) {
              console.log('Error...', err);
            });
          }
        }
      ]
    });

    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
  };
});
