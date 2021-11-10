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

// Moiz
function twoArrays(k, A, B) {
    // Write your code here
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    while (A.length && B.length) {
        let a = A.shift();
        let b = B.shift();
        if (a + b < k) return 'NO'
    }
    
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k){
            return 'NO'
        } 
    }
    
    return 'YES'

}
