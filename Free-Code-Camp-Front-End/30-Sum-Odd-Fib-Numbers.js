function sumFibs(num) {
  var currentNum = 1, nextNum = 1, result = 0, temp;
  if (num === 1) {
    return num;
  }
  while(num >= currentNum) {
    temp = currentNum;
    if (currentNum % 2 !== 0) {
      result += currentNum;
    }
    currentNum = nextNum;
    nextNum = temp + currentNum;
  }
  
  
  return result;
}

sumFibs(4);