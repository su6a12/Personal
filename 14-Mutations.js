function mutation(arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase().split('');
  var flag = true;
  second.forEach(function(item) {
    if (first.indexOf(item) === -1) {
      flag = false;
    }
  });
  return flag;
}

mutation(['hello', 'hey']);