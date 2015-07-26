function drop(arr, func) {   
  return arr.filter(func);
}

drop([1, 2, 3], function(n) {return n < 3; });