//Ivy
function diagonalDifference(arr) {

    let leftToRight = 0;
    let rightToLeft = 0;

    for(let i = 0; i < arr.length; i++) {
        let complementOfI = (arr.length - 1) - i

        leftToRight += arr[i][i]

        rightToLeft += arr[i][complementOfI]
    }

    let absDifference = Math.abs(leftToRight - rightToLeft)

    return absDifference;
}


// Moiz
function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    
    for (let i = 0; i < arr.length; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][arr.length - 1 - i];
    }
    
    let difference = rightDiagonal - leftDiagonal;
    if (difference < 0) difference *= -1;
    return difference;
}
