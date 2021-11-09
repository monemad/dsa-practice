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
