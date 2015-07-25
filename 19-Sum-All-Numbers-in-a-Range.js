function sumAll(arr) {
  var mini = Math.min.apply(null, arr);
  var maxi = Math.max.apply(null, arr);
  var numArr = [];
  for(var i = mini; i <= maxi; i++) {
    numArr.push(i);
  }
  var total = numArr.reduce(function(prev, curr) {
    return prev + curr;
  });
  
  return total;

}

sumAll([1, 4]);