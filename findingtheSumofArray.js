
var ar = [1,2,3,4,5]

function simpleArraySum(ar) {
    var sum=0;
  
    for (var n = 0; n < ar.length; n++) {
        sum += ar[n];
    }
    return sum;
}
simpleArraySum(ar);
//Should return 15. (ar = [1,2,3,4,5] ... 1+2+3+4+5 = 15)
