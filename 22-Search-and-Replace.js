function replace(str, before, after) {
  var result = [];
  var afterCap = after.charAt(0).toUpperCase() + after.slice(1);
  var strArr = str.split(' ');
  strArr.forEach(function(item) {
    // if word in string equals word to be replaced
    if (item === before) {
      if (item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90) {
        result.push(afterCap);
      }
      else {
        result.push(after);
      }
    }
    else if (item !== before) {
      result.push(item);
    }
      
  });
  
 return result.join(' ');
}

replace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");