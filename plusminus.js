var arr = [-4,3,-9,0,4,1];

function plusMinus(arr) {
    var n = arr.length;
    var positive = 0;
    var negative = 0;
    var zero = 0;

    for(var i=0; i < n; i++) {
      if (arr[i] > 0) {
        positive += 1;
      } else if (arr[i] < 0) {
        negative += 1;
      } else {
        zero += 1;
      }

    }
    var pos = positive / n;
    var neg = negative / n;
    var zer = zero / n;

    console.log(pos.toFixed(6) + "\n" + neg.toFixed(6) + "\n" + zer.toFixed(6));
}

    plusMinus(arr);
