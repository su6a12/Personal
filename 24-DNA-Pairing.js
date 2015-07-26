function pair(str) {
  var DNA = ['A', 'T', 'C', 'G'];
  var DNAMatch = ['T', 'A', 'G', 'C'];
  var strArr = str.split(''), result = [];
  strArr.forEach(function(item) {
    var index = DNA.indexOf(item);
    result.push([item, DNAMatch[index]]);
  });
  
 return result;
}

pair("GCG");