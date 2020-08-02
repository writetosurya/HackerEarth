var a = [17, 28, 30];
var b = [99, 16, 8];

function compareTriplets(a, b) {
    var finalScore = [];
    var aScore = 0;
    var bScore = 0;
    
    for (var i = 0; i < a.length; i++) {
        for (var i = 0; i < b.length; i++) {
            if (a[i] > b[i]) {
                aScore += 1;
            } else if (a[i] < b[i]) {
                bScore +=1;
            } else {
                aScore +=0;
                bScore +=0;
            }
        }
    }

    finalScore = [aScore,bScore];
    return finalScore;
    // or
    //   finalScore[0] = aScore;
    //   finalScore[1] = bScore;
    // return finalScore;

}

compareTriplets(a,b);
