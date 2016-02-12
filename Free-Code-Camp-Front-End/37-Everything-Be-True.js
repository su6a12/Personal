function every(collection, pre) {
  var flag = true;
  //if ()
  collection.forEach(function(objs) {
    
    if (!objs.hasOwnProperty(pre)) {
      flag = false;
    }
    //if (objs[pre] !== )
  });
  // Does everyone have one of these?
  return flag;
}


every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');