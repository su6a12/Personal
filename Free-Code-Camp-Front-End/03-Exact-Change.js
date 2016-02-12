function drawer(price, cash, cid) {  
  var result = [];      // variable to hold result array
  var cidTotal = 0;      // variable to hold total in register
  var remainder = cash - price;  // variable for change due
  var cidEquivs = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  var multiplier;
  for(var i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }
  //round to two decimal places
  cidTotal = cidTotal.toFixed(2); 
  
  if (cidTotal - remainder < 0) {
    return 'Insufficient Funds';
  }
  else if (cidTotal == remainder) {
    return 'Closed';
  }
  else {
    for(var j = cidEquivs.length-1; j >= 0; j--) {
      if (remainder >= cid[j][1]) {
        result.push([cid[j][0], cid[j][1]]);
        remainder -= cid[j][1];
        remainder = remainder.toFixed(2);
        
      }
      else {
        multiplier = Math.floor(remainder / cidEquivs[j]);
        if (multiplier !== 0) {
          remainder -= (multiplier * cidEquivs[j]);
          remainder = remainder.toFixed(2);
          result.push([cid[j][0], (multiplier * cidEquivs[j])]);
        }
      }
    }
  }
  return result;
}
// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]);
