function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var result = arr.filter(function(item) {
    if(item) {
      return item;
    }
  });
  return result;
}

bouncer([7, 'ate', '', false, 9]);