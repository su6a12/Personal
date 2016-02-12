function rot13(str) { // LBH QVQ VG!
  var result = [], strArr = str.split(''), code = 0;
  
  strArr.forEach(function(each) {
    code = each.charCodeAt(0);

    if ((code >= 65) && (code <= 90)) {
      if ((code + 13) > 90) {
        result.push(String.fromCharCode((code + 13) - 26));
      }
      else {
        result.push(String.fromCharCode(code + 13));
      }
    }
    else {
      result.push(each);
    }
  });
  return result.join('');
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
