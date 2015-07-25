function findLongestWord(str) {
  var strArr = str.split(' ');
  var biggest = strArr[0].length;
  for(var i = 1; i < strArr.length; i++) {
    if (strArr[i].length > biggest) {
      biggest = strArr[i].length;
    }
  }
  return biggest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');