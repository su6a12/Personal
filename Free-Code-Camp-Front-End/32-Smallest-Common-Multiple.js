function smallestCommons(arr) {
  arr.sort();
  var smaller = arr[0], larger = arr[1], flag = false, arrRange = [], current = larger, j, result;
  for(var i = smaller; i <= larger; i++) {
    arrRange.push(i);
  }
  while(flag === false) {
    flag = true;
    for(j = 0; j < arrRange.length; j++) {
      if (current % arrRange[j] !== 0) {
        flag = false;
      }
    }
    if (flag) {
      result = current;
    }
    current++;
  }
  return result; 
}

smallestCommons([1,5]);