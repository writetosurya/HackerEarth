const ar = [3, 2, 1, 3,3,4];


function birthdayCakeCandles(ar) {
  var height = Math.max(...ar);
  var frequency = 0;

  for ( var i = 0; i < ar.length ; i++ ) {
    if (ar[i] == height) {
      frequency += 1;
    }
  }
  return frequency;
}

birthdayCakeCandles(ar);
