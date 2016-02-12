function convert(num) {
  var result = '';
  var roman = ['M', 'D', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var equiv = [1000, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  equiv.forEach(function(item, index) {
    while(num >= item) {
      result += roman[index];
      num -= item;
    }
  });
 return result;
}

convert(36);