/**
 *
 * Created by upamune on 15/12/31.
 */

app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
