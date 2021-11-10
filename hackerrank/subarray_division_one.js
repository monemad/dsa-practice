//Ivy

function birthday(s, d, m) {

    let count = 0;
    let sum = 0

    for(let i = 0; i < s.length; i++) {

        if((i + 1) <= m) {
            sum += s[i];
        } else {

            sum = (sum - s[i-m] + s[i])
        }

        if (sum === d && i+1 >= m) {
            count ++;
        }
    }
    return count
}
