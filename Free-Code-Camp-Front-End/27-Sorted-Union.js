function unite(arr1, arr2, arr3) {
  var arrTotal = arr1.concat(arr2, arr3);
  var result = [];
  for (var item in arrTotal) {
    if (result.indexOf(arrTotal[item]) === -1) {
      result.push(arrTotal[item]);
    }
  }
  return result;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);