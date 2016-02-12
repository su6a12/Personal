function destroyer(arr) {
  // Remove all the values
  var nums = Array.prototype.slice.call(arguments); //array
  //nums = nums.slice(1);
  
  var results = arr.filter(function(item, index, arr) {
    if (nums.indexOf(item) === -1)
        return item;
  });
  return results;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);