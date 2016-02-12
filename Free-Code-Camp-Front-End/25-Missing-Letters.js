function fearNotLetter(str) {
  var strArr = str.split('');
  var result = '', flag = false;
  var firstLetterCode = str.charAt(0).charCodeAt();
  for(var i = 1; i < strArr.length; i++) {
    if (!flag) {
      if (strArr[i].charCodeAt() !== (firstLetterCode + i)) {
        result = String.fromCharCode(firstLetterCode + i);
        flag = true;
      }
    }
  }
  
  return result === '' ? undefined : result;
}

fearNotLetter('fghjkl');