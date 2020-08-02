
arr = [11, 2, 4, 4, 5, 6,10, 8, -12];

function diagonalDifference(arr) {
    var n = arr[0].length;

    var leftSum = 0;
    var rightSum = 0;
    // var difference = 0;

    for (i = 0, j = n - 1; i < n ; i++ , j--) {

        leftSum += arr[i][i];
        rightSum += arr[i][j];

    }

    var difference = leftSum - rightSum;

    return Math.abs(difference);
}

diagonalDifference(arr)
