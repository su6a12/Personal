function where(arr, num) {
  // Find my place in this sorted array.
  arr.sort();
  var index;
  for(var i = 0; i < arr.length-1; i++) {
    if (arr[i] < num && arr[i+1] >= num) {
      index = i+1;
    }
  }
  return index;
}

where([40, 60], 50);