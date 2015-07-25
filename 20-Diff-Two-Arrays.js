function diff(arr1, arr2) {
  var count = {};
  var result = [];
  var mash = arr1.concat(arr2);
  mash.forEach(function(item) {
    check(item, count);
  });
  
  for(var key in count) {
    if (count[key] === 1) {
      if (isNaN(key))
        result.push(key);
      else
        result.push(parseInt(key));
    }
  }
  
  return result;
}

function check(item, count) {
  if(!count[item]) {
    count[item] = 1;
  }
  else {
    count[item]++;
  }
  console.log(count);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);