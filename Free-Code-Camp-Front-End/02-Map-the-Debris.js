function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];
  arr.forEach(function(item) {
    var axis = earthRadius + item.avgAlt;
    var orbital = 2 * Math.PI * (Math.sqrt(Math.pow(axis, 3) / GM));
    result.push({name: item.name, orbitalPeriod: Math.round(orbital)});
  });
  
  return result;
}

orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]);