function telephoneCheck(str) {
  if (str[0].match(/\(/)) {    //check that parentheses in the right places
    if (!str[4].match(/\)/)) {  //index 0 and 4
      return false;
    }
  }
  //check that if first char not "(" that it's a number
  else if (str[0].match(/[^0-9]/)) {   
    return false;      
  }
  var strNum = str.replace(/[^0-9]/g, '');  //remove non numerical chars

  if (strNum.length === 10) {
    return true;
  }
 
  else if (strNum.length === 11) {
    //console.log(strNum.length);
    if (strNum[0] !== "1") {
      return false;
    }
    else
      return true;
  }
  else {        //if string is not 10 or 11 chars long
    return false;
  }
  return true;
}


telephoneCheck("555-555-5555");
