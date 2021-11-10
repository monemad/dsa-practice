//Ivy
function twoArrays(k, A, B) {
    let ascending = A.sort((a,b) => a-b)
    let decending = B.sort((a,b) => b-a)

    for(let i = 0; i < ascending.length; i++) {
        if(ascending[i] + decending[i] < k) {
            return 'NO'
        }
    }
    return 'YES'
}
