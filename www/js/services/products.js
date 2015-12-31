/**
 *
 * Created by upamune on 15/12/31.
 */

app.factory('Products', function(FURL, Auth, $firebaseArray) {
  "use strict";
  var ref = new Firebase(FURL);
  var products = $firebaseArray(ref.child('products'));

  var Products = {

    all : function() {
      return products;
    },

    fetchAll : function() {
      return products.$loaded();
    },

    saveProduct : function(product, image) {
      var newProduct = {
        seller_image: Auth.user.profile.gravatar,
        seller_name: Auth.user.profile.name,
        name: product.name,
        tagline: product.tagline,
        description: product.description,
        price: product.price,
        image: image
      };

      return products.$add(newProduct).then(function(){
        console.log('added to the database');
      });
    },

  };

  return Products;

});
