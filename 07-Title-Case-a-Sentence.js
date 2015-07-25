function titleCase(str) {
  var newArr = str.split(' ');
  var newArr2 = newArr.map(function(val) {
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
  });
  return newArr2.join(' ');
}

titleCase("I'm a little tea pot");