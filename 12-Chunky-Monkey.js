function chunk(arr, size) {
  var result = [];
  var temp = [];   
  var howMany = Math.ceil(arr.length / size);
  
  for(var i = 1; i <= howMany; i++) {
    if (arr.length > size) {
      for(var j = 0; j < size; j++) {  
        temp.push(arr.shift());
      }
      result.push(temp);
      temp = [];
    }
    else {
      result.push(arr);
    }
    
  }
  return result;
}

chunk(['a', 'b', 'c', 'd'], 2);