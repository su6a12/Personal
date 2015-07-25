function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var targetLen = target.split('').length;
  if(str.substr(str.length-targetLen) === target) {
    return true;    
  }
  else {
    return false;
  }
}

end('Bastian', 'n');