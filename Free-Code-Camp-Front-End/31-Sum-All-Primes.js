function sumPrimes(num) {
  var primeSum = [2], currentNum = 3, isPrime = true;
  if (num === 2) {
    return num;
  } else {
    while(num >= currentNum) {
      for(var j = 2; j < currentNum; j++) {
        if(currentNum % j === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        primeSum.push(currentNum);
      }
      currentNum++;
      isPrime = true;
    }
  }
  var result = primeSum.reduce(function(first, second) {
    return first + second;
  });
  return result;
}

sumPrimes(10);