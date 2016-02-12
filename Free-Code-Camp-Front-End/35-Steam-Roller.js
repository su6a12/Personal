function steamroller(arr) {

  var resultArr = arr.reduce(function(result, toFlatten) {
    return result.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
  }, []);
  
  return resultArr;
}

steamroller([1, [2], [3, [[4]]]]);