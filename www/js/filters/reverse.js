/**
 *
 * Created by upamune on 15/12/31.
 */

app.filter('reverse', function() {
  return function(items) {
    if(Array.isArray(items)) {
      return items.slice().reverse();
    }else{
      return items;
    }
  };
});
