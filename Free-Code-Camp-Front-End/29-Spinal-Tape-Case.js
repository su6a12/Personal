function spinalCase(str) {
  var strNew = str.replace(/[^a-zA-Z-]/g, ' ');
  var result = strNew[0].toLowerCase();
  for(var i = 1; i < strNew.length; i++) {
    //if capital letter
    if (strNew[i].search(/[A-Z]/) !== -1) {
      if (strNew[i-1].search(/\s/) === -1) {
        result += '-' + strNew[i].toLowerCase();
      }
      else
        result += strNew[i].toLowerCase();
    }
    else if (strNew[i].search(/\s/) !== -1) {
      result += '-';
    }
    else {
      result += strNew[i];
    }
  }
  
  return result;
}

spinalCase('This Is Spinal Tap');