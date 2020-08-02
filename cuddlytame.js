ar=[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {

  var sum = 0;

  for(var i = 0; i < ar.length ; i++) {

    sum += ar[i];
  }
  console.log(sum)
  return sum;
}

aVeryBigSum(ar);
