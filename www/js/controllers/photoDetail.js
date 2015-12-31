/**
 * Created by upamune on 15/12/31.
 */

app.controller('PhotoDetailCtrl', function($scope, $ionicLoading, Products, $state, $rootScope) {

  $scope.imgURI = $rootScope.imgURI;


  $scope.button = function(product) {
    "use strict";

    $ionicLoading.show({
      template: 'Posting...'
    });

    Products.saveProduct(product, $scope.imgURI).then(function(){

      $ionicLoading.hide();

      $state.go('tab.dash');
    });
  }
});
