function inventory(arr1, arr2) {
  var currInv = arr1, newInv = arr2, flag = false;
  for(var i = 0; i < newInv.length; i++) {    //loop through all new inventory
    for(var j = 0; j < currInv.length; j++) {  //loop through all current inventory
      //console.log(flag);
      if (newInv[i][1] === currInv[j][1]) {  //if there's a match
        currInv[j][0] += newInv[i][0];    //add their quantities
        flag = true;          //set flag to true
      }
    }
    if (!flag) {        //if flag is false
      currInv.push(newInv[i]);    //add new inventory to current list
      
    }
    flag = false;        //reset flag to false
  }
  //sort current inventory list in alphabetical order
  currInv.sort(function(first, second) {
    if (first[1].split(' ')[0] < second[1].split(' ')[0])
      return -1;
    else if (first[1].split(' ')[0] > second[1].split(' ')[0])
      return 1;
    else
      return 0;
  });
  return currInv;
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newwInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

inventory(curInv, newwInv);