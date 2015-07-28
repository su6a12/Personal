function pairwise(arr, arg) {
  var markerArr = [];
  for (i=0;i<=arr.length-1;i++){
      for (x=i+1;x<=arr.length-1;x++){
        if ( !markerArr[x] && !markerArr[i]){
          if (arr[x]+arr[i]==arg){
            markerArr[x] = markerArr[i]= true;
          }
        }

      }
  }
  console.log (markerArr);
  return markerArr.reduce(function(previousValue, currentValue, index, array) {
    if (currentValue){
      return previousValue + index;
    } 
  },0);
  
}


pairwise([1, 2, 3, 4], 4);