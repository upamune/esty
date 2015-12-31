/**
 *
 * Created by upamune on 15/12/31.
 */

app .controller('DashCtrl', function($scope, Products) {
  "use strict";

  $scope.products = Products.all();

  $scope.doRefresh = function() {
    Products.fetchAll()
      .then(function(products) {
        $scope.products = products;
      })
      .finally(function(){
        $scope.$broadcast('scroll.refreshComplete');
        console.log($scope.products);
      });
  };

});
