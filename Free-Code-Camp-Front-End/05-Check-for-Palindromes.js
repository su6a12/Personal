function palindrome(str) {
  // Good luck!
  var flag = true;
  var strArr = str.replace(/[^a-zA-Z]/g, '').toLowerCase().split('');
  var half = Math.floor(strArr.length / 2);
  
  for(var i = 0; i < half; i++) {
    if (strArr[i] !== strArr[strArr.length - 1 - i]) {
      flag = false;
    }
  }
  return flag;
}



palindrome("eye");