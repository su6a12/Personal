function sym(args) {
  var argsArr = Array.prototype.slice.call(arguments);
  var count = 0, newArrList = [], result = [];
  
  //Remove duplicates
  for(var a = 0; a < argsArr.length; a++) {
    var currArr = argsArr[a], valuesSoFar = [];
    for(var b = 0; b < currArr.length; b++) {
      if (valuesSoFar.indexOf(currArr[b]) === -1) {
        valuesSoFar.push(currArr[b]);
      }
    }
  newArrList.push(valuesSoFar);  //New array without duplicates in each array
  }
  
  newArrList.filter(function(eachArr) {
    //console.log(eachArr);
    return eachArr.filter(function(element) {
      //console.log(element);
      if (result.indexOf(element) === -1) {  //If element not in result array
        result.push(element);
        console.log(result);
      }
      else
        result.splice(result.indexOf(element), 1);  //Remove element if found
    });
  });
  return result;
}

sym([1, 2, 3], [5, 2, 1, 4]);
