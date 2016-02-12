function repeat(str, num) {
  // repeat after me
  var result = "";
  if (num <= 0) {
    return '';
  }
  else {
    for(var i = 1; i <= num; i++) {
      result += str;
    }
  }
  return result;
}

repeat('abc', 3);