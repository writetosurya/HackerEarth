var arr=[9,3,5,7,1];

function miniMaxSum(arr) {
  var newArr= [...arr].sort();
  var sum=0;

  for ( var i=0; i < newArr.length; i++) {
    sum += newArr[i];
  }

  var max = sum - newArr[0];
  var min = sum - newArr[newArr.length -1];
  
  console.log(min, max);
  console.log(arr);
  
}

miniMaxSum(arr);
