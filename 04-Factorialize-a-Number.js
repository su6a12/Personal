function factorialize(num) {
  var total = 1;
  if (num === 1|| num === 0) {
    return num;
  }
  else {
    return num * factorialize(num-1);
  }
}

factorialize(5);