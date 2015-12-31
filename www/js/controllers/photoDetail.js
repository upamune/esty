/**
 * Created by upamune on 15/12/31.
 */

app.controller('PhotoDetailCtrl', function($scope, Products, $state, $rootScope) {

  $scope.imgURI = $rootScope.imgURI;


  $scope.button = function(product) {
    "use strict";

    Products.saveProduct(product, $scope.imgURI).then(function(){
      $state.go('tab.dash');
    });
  }
});
