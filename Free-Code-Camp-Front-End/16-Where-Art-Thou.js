function where(collection, source) {
  var result = [];
  var sourceKey = Object.keys(source);  //find key of source
  
  collection.forEach(function(item) {
    //var objs = Object.keys(item);
    if (item[sourceKey] === source[sourceKey]) {
        result.push(item);
      //}
    }
  });
  return result;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });