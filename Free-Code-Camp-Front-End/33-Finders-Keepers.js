function find(arr, func) {
  var result = [];
  var flag = false;
  arr.forEach(function(item) {
    if (func.call(null, item)) {
      flag = true;
    }
    if (flag) {
      result.push(item);
    }
  });
  return result[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });