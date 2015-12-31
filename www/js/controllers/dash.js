/**
 *
 * Created by upamune on 15/12/31.
 */

app .controller('DashCtrl', function($scope, Products) {
  "use strict";

  $scope.products = Products.all();

  console.log('the producs ', $scope.products);
});
