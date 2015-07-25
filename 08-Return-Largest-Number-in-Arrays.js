function largestOfFour(arr) {
  // You can do this!
  var maxArr = [];
  arr.forEach(function(element) {
    var max = element[0];
    for(var i = 1; i < element.length; i++) {
      if(element[i] > max) {
        max = element[i];
      }
    }
    maxArr.push(max);
  });
  return maxArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);